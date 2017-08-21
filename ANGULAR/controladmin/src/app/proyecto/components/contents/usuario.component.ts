import { Component, Injector, ElementRef, ViewChild } from '@angular/core';
import { BaseComponent } from '../../../base/components/structure/base.component';
import { Message, SelectItem } from 'primeng/primeng';
import { UsuarioService } from '../../services/usuario.service';
import { AplicacionService } from '../../services/aplicacion.service';

import { Usuario } from '../../../base/entities/usuario';
import { Rol } from '../../../base/entities/rol';
import { Aplicacion } from '../../../base/entities/aplicacion';

import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

@Component({
    selector: 'usuario-panel',
    templateUrl: './usuario.component.html',
    providers: [UsuarioService, AplicacionService]
})

export class UsuarioComponent extends BaseComponent {

    constructor(
        public injector: Injector,
        public elementRef: ElementRef,
        private usuarioService: UsuarioService,
        private aplicacionService: AplicacionService
    ) {
        super(injector, elementRef);
        this.buscaUsuarios();
        this.buscaAplicaciones();
    }

    @ViewChild('userCreate')
    userCreate: ModalComponent;

    @ViewChild('userEdit')
    userEdit: ModalComponent;

    combo: SelectItem[] = [{ label: "Sin permiso", value: 3 }, { label: "Usuario", value: 1 }, { label: "Administrador", value: 2 }];
    userSelected: Usuario = new Usuario();
    aplicaciones: Aplicacion[] = [];
    uidUserSelected: string;
    indexUserSelected: number;
    usuarios: Usuario[] = [];
    msgsUser: Message[] = [];

    buscaUsuarios() {
        this.usuarioService.getUsuarios().subscribe(
            usuarios => {
                this.usuarios = this.usuarioService.mapUsuarios(usuarios);
                this.usuarios.forEach(user => {
                    for (var i = 0; i < user.roles.length; i++) {
                        user.roles[i].comboRol = this.combo
                    }
                });
            }, error => {
                this.errorEmitter(error);
            }
        );
    }

    buscaAplicaciones() {
        this.aplicacionService.getAplicaciones().subscribe(
            apps => {
                this.aplicaciones = this.aplicacionService.mapAplicaciones(apps);
            }, error => {
                this.errorEmitter(error);
            }
        );
    }

    editaUsuario(user: Usuario) {
        this.msgsUser = [];
        let msgs: Message[] = this.usuarioService.validaUsuario(user, this.usuarios, this.uidUserSelected);
        if (msgs.length == 0) {
            if (user.admin_boolean) {
                user.admin = 1;
            } else {
                user.admin = 0;
            }
            if (user.estado_boolean) {
                user.estado = "1";
                user.estado_glosa = "ACTIVO";
            } else {
                user.estado = "0";
                user.estado_glosa = "NO ACTIVO";
            }

            let rols = [];
            user.roles.forEach(rol => {
                rols.push({ rut: user.uid, app_id: rol.aplicacion_id, rol_id: rol.rol_id, creado_por: this.userOnline.uid });
            });

            var editUser = {
                usuario: {
                    rut: user.uid,
                    password: null,
                    correo: user.correo,
                    nombres: user.nombre,
                    apellidoPA: user.apellidoP,
                    apellidoMA: user.apellidoM,
                    superadmin: user.admin,
                    estado: user.estado,
                    creado_por: this.userOnline.uid
                },
                roles: rols
            }
            this.usuarioService.updateUsuario(editUser).subscribe(
                editado => {
                    if (editado.hasOwnProperty("error")) {
                        this.msgsUser = [{ severity: 'error', summary: 'Nuevo usuario', detail: editado.error }];
                    } else {
                        let tmp = [...this.usuarios];
                        tmp[this.indexUserSelected] = user;
                        this.usuarios = tmp;
                        this.closeUserEditModal();
                        this.msgsUser = [{ severity: 'success', summary: 'Usuario actualizado', detail: 'El usuario ha sido actualizado con exito.' }];
                    }
                }, error => {
                    this.errorEmitter(error);
                }
            );
        } else {
            this.msgsUser = msgs;
        }
    }

    creaUsuario(user: Usuario) {
        this.msgsUser = [];
        let msgs: Message[] = this.usuarioService.validaUsuario(user, this.usuarios, this.uidUserSelected);
        if (msgs.length == 0) {
            if (user.admin_boolean) {
                user.admin = 1;
            } else {
                user.admin = 0;
            }

            user.rut = user.uid.substring(0, user.uid.length - 1) + "-" + user.uid.substring(user.uid.length - 1, user.uid.length)

            let rols = [];
            user.roles.forEach(rol => {
                rols.push({ rut: user.uid, app_id: rol.aplicacion_id, rol_id: rol.rol_id, creado_por: this.userOnline.uid });
            });

            var newUser = {
                usuario: {
                    rut: user.uid,
                    password: null,
                    correo: user.correo,
                    nombres: user.nombre,
                    apellidoPA: user.apellidoP,
                    apellidoMA: user.apellidoM,
                    superadmin: user.admin,
                    creado_por: this.userOnline.uid
                },
                roles: rols
            }
            this.usuarioService.createUsuario(newUser).subscribe(
                nuevo => {
                    if (nuevo.hasOwnProperty("error")) {
                        this.msgsUser = [{ severity: 'error', summary: 'Nuevo usuario', detail: nuevo.error }];
                    } else {
                        let tmp = [...this.usuarios];
                        tmp.push(user);
                        this.usuarios = tmp;
                        this.closeUserCreateModal();
                        this.msgsUser = [{ severity: 'success', summary: 'Usuario creado', detail: 'El usuario ha sido creado con exito.' }];
                    }
                }, error => {
                    this.errorEmitter(error);
                }
            );
        } else {
            this.msgsUser = msgs;
        }
    }

    closeUserEditModal() {
        this.uidUserSelected = "";
        this.indexUserSelected = -1;
        this.userSelected = new Usuario();
        this.userEdit.close();
    }

    closeUserCreateModal() {
        this.uidUserSelected = "";
        this.userSelected = new Usuario();
        this.userCreate.close();
    }

    onUserEditModal(userTable: Usuario) {
        this.uidUserSelected = userTable.uid;
        this.indexUserSelected = this.usuarioService.findSelectedUsuarioIndex(userTable, this.usuarios);
        this.userSelected = this.usuarioService.cloneUser(userTable);
        this.userEdit.open();
    }

    onUserCreateModal() {
        this.uidUserSelected = "";
        this.userSelected = new Usuario();
        this.userSelected.estado = "1";
        this.userSelected.estado_boolean = true;
        this.userSelected.estado_glosa = "ACTIVO";
        this.userSelected.roles = [];
        this.aplicaciones.forEach(app => {
            this.userSelected.roles.push(new Rol(app.id, app.nombre, null, null, "SIN PERMISO", this.combo));
        });
        this.userCreate.open();
    }

    changeSuperAdmin(user: Usuario) {
        if (!user.estado_boolean) {
            user.estado_boolean = true;
        }
    }

    changeEstado(user: Usuario) {
        if (user.admin_boolean && !user.estado_boolean) {
            user.admin_boolean = false;
        }
    }

}
