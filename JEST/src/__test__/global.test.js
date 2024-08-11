const text = "Mi primer test";

test("Debe contener el texto", () => {
  expect(text).toMatch(/test/i);
});

/*
  Realiza un test unitario para verificar que las variables
  recibidas en la función son del tipo correcto.

  Y además que cumplan con sus formatos respectivos.

  Datos:
  - nombre: string | formato: "nombre apellido"
  - edad: number | formato: 0 - 99
  - email: string | formato: email
  - telefono: string | formato: +00000-0000000
  - cedula: string | formato: letra-00000000
*/

function validarDatos(nombre, edad, email, telefono, cedula) {
  if (typeof nombre !== "string" || !/^[a-zA-Z]+\s[a-zA-Z]+$/.test(nombre)) {
    return {
      mensaje: "Nombre inválido",
      estado: false,
    };
  }

  if (typeof edad !== "number" || edad < 0 || edad > 99) {
    return {
      mensaje: "Edad inválida",
      estado: false,
    };
  }

  if (
    typeof email !== "string" ||
    !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)
  ) {
    return {
      mensaje: "Email inválido",
      estado: false,
    };
  }

  if (typeof telefono !== "string" || !/^\+\d{5}-\d{7}$/.test(telefono)) {
    return {
      mensaje: "Teléfono inválido",
      estado: false,
    };
  }

  if (typeof cedula !== "string" || !/^[a-zA-Z]-\d{8}$/.test(cedula)) {
    return {
      mensaje: "Cédula inválida",
      estado: false,
    };
  }

  return {
    mensaje: "Datos válidos",
    estado: true,
  };
}

test("Validar datos", () => {
  expect(validarDatos("Juan Perez", 25, "juan@juan.com", "+58412-7850227", "V-12345678")).toEqual({
    mensaje: "Datos válidos",
    estado: true,
  });
});