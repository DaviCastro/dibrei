package com.belbin.usuario;

import javax.ejb.Stateless;

import com.belbin.service.EntityServiceImpl;

/**
 * 
 * @author Davidson
 *
 */
@Stateless
public class UsuarioService extends EntityServiceImpl<Usuario> implements IUsuarioService {

}
