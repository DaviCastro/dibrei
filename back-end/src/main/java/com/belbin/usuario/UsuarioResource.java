package com.belbin.usuario;

import java.net.URI;
import java.util.List;

import javax.ejb.EJB;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.UriInfo;

/**
 * 
 * @author Davidson
 *
 */
@Path("/usuarios")
public class UsuarioResource {

	@Context
	UriInfo uriInfo;

	@EJB
	IUsuarioService usuarioService;

	@POST
	public Response create(Usuario usuario) {
		usuarioService.create(usuario);

		URI uri = uriInfo.getAbsolutePathBuilder().path(String.valueOf(usuario.getId())).build();
		return Response.created(uri).build();
	}

	@GET
	@Path("{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Usuario find(@PathParam("id") int id) {
		return usuarioService.find(id);
	}

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Usuario> find() {
		return usuarioService.find();
	}

	@PUT
	@Path("{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response update(@PathParam("id") int id, Usuario usuario) {
		usuarioService.update(usuario);
		return Response.noContent().build();
	}

	@DELETE
	@Path("{id}")
	public Response delete(@PathParam("id") int id) {
		usuarioService.delete(id);
		return Response.noContent().build();
	}

}
