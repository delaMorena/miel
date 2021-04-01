// import { useHistory } from "react-router-dom";
import styles from "../styles/signin.module.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { ComponenteInput } from "../components/ComponenteInput";
import FacebookLogin from "react-facebook-login";
import basket from '../img/cesta.png'

import { Navbar } from "../components/Navbar";

import {
  Formulario,
  Label,
  ContenedorTerminos,
  // GrupoInput,
  // LeyendaError,
  // IconoValidacion,
  ContenedorBotonCentrado,
  Boton,
  MensajeExito,
  MensajeError,
} from "../styledComponents/Formularios";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [usuario, cambiarUsuario] = useState({ campo: "", valido: null });
  const [nombre, cambiarNombre] = useState({ campo: "", valido: null });
  const [password, cambiarPassword] = useState({ campo: "", valido: null });
  const [password2, cambiarPassword2] = useState({ campo: "", valido: null });
  const [correo, cambiarCorreo] = useState({ campo: "", valido: null });
  const [telefono, cambiarTelefono] = useState({ campo: "", valido: null });
  const [terminos, cambiarTerminos] = useState(false);
  const [formularioValido, cambiarFormularioValido] = useState(null);

  const expresiones = {
    usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/, // 7 a 14 numeros.
  };

  const validarPassword2 = () => {
    if (password.campo.length > 0) {
      if (password.campo !== password2.campo) {
        cambiarPassword2((prevState) => {
          return { ...prevState, valido: "false" };
        });
      } else {
        cambiarPassword2((prevState) => {
          return { ...prevState, valido: "true" };
        });
      }
    }
  };

  const onChangeTerminos = (e) => {
    cambiarTerminos(e.target.checked);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      usuario.valido === "true" &&
      nombre.valido === "true" &&
      password.valido === "true" &&
      password2.valido === "true" &&
      correo.valido === "true" &&
      telefono.valido === "true" &&
      terminos
    ) {
      cambiarFormularioValido(true);
      cambiarUsuario({ campo: "", valido: "" });
      cambiarNombre({ campo: "", valido: null });
      cambiarPassword({ campo: "", valido: null });
      cambiarPassword2({ campo: "", valido: "null" });
      cambiarCorreo({ campo: "", valido: null });
      cambiarTelefono({ campo: "", valido: null });

      // ...
    } else {
      cambiarFormularioValido(false);
    }
  };
  const HandleonClick = () => {
    if (
      usuario.valido === "true" &&
      nombre.valido === "true" &&
      password.valido === "true" &&
      password2.valido === "true" &&
      correo.valido === "true" &&
      telefono.valido === "true" &&
      terminos
    ) {
      alert("USUARIA " + usuario.campo + " REGISTRADO CON ÉXITO");
    }
  };
	const [login, setLogin] = useState(false);
	const [data, setData] = useState({});
	const [picture, setPicture] = useState("");

	const responseFacebook = (response) => {
		console.log(response);
		setData(response);
		setPicture(response.picture.data.url);
		if (response.accessToken) {
			setLogin(true);
		} else {
			setLogin(false);
		}
	};

  return (
    <div>
      <Navbar />

      {!login && (
        <main className={styles.signinContainer}>
          <Formulario action="" onSubmit={onSubmit}>
            <ComponenteInput
              estado={usuario}
              cambiarEstado={cambiarUsuario}
              tipo="text"
              label="Elige un nombre de usuario"
              placeholder="Lola2021"
              name="Nombre de usuario"
              leyendaError="El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo."
              expresionRegular={expresiones.usuario}
            />
            <ComponenteInput
              estado={nombre}
              cambiarEstado={cambiarNombre}
              tipo="text"
              label="Nombre y apellido "
              placeholder="Lola Rodriguez"
              name="usuario"
              leyendaError="El nombre solo puede contener letras y espacios."
              expresionRegular={expresiones.nombre}
            />
            <ComponenteInput
              estado={password}
              cambiarEstado={cambiarPassword}
              tipo="password"
              label="Contraseña"
              name="password1"
              leyendaError="La contraseña tiene que ser de 4 a 12 dígitos."
              expresionRegular={expresiones.password}
            />
            <ComponenteInput
              estado={password2}
              cambiarEstado={cambiarPassword2}
              tipo="password"
              label="Repetir Contraseña"
              name="password2"
              leyendaError="Ambas contraseñas deben ser iguales."
              funcion={validarPassword2}
            />
            <ComponenteInput
              estado={correo}
              cambiarEstado={cambiarCorreo}
              tipo="email"
              label="Correo Electrónico"
              placeholder="lola@correo.com"
              name="correo"
              leyendaError="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo."
              expresionRegular={expresiones.correo}
            />
            <ComponenteInput
              estado={telefono}
              cambiarEstado={cambiarTelefono}
              tipo="text"
              label="Teléfono"
              placeholder="6611234567"
              name="telefono"
              leyendaError="El telefono solo puede contener numeros y el maximo son 14 dígitos."
              expresionRegular={expresiones.telefono}
            />

            <ContenedorTerminos>
              <Label>
                <input
                  type="checkbox"
                  name="terminos"
                  id="terminos"
                  checked={terminos}
                  onChange={onChangeTerminos}
                />
                Acepto los Terminos y Condiciones
              </Label>
            </ContenedorTerminos>
            {formularioValido === false && (
              <MensajeError>
                <p>
                  <FontAwesomeIcon icon={faExclamationTriangle} />
                  <b>Error:</b> Por favor rellena el formulario correctamente.
                </p>
              </MensajeError>
            )}
            <ContenedorBotonCentrado>
              <Boton type="submit" onClick={HandleonClick}>
                Enviar
              </Boton>
              {formularioValido === true && (
                <MensajeExito>Formulario enviado exitosamente!</MensajeExito>
              )}
            </ContenedorBotonCentrado>
          </Formulario>
          <br />

          <FacebookLogin
            appId="372816440456066"
            autoLoad={true}
            fields="name,email,picture"
            scope="public_profile,user_friends"
            callback={responseFacebook}
            textButton="Continuar con Facebook"
            icon="fa-facebook"
          />
        </main>
      )}
      {login && (
        <div className={styles.fbProfileContainer}>
          <img className={styles.fbImage} src={picture} alt={data.name}></img>
          <div>
            Ya iniciaste sesión como <br></br>
            {data.name}
          </div>
          <div>{data.email}</div>
          <Link to="/cart">
            <div className={styles.slogan}>
              Tenemos a tu disposición productos apícolas de la mejor calidad.
              <br></br>Consume local
            </div>
			<br></br>
            <img
              className={styles.basquet}
              src={basket}
              alt={basket}
              width="60"
            ></img>
			<p>Ir a la tienda</p>
          </Link>
        </div>
      )}
    </div>
  );
};

export default SignIn;
