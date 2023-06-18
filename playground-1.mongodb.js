
use("AdoptMe");


 // ------------------------------------- USUARIOS ------------------------------------------

db.createCollection("Usuarios", {
    validator: {
        $jsonSchema: 
        {
            bsonType: "object",
            required: ["id_usuario", "nombres", "apellido_paterno", "apellido_materno", "DNI", "correo", "numero_telefonico", "contraseña", "mascotas", "roles"],
            properties: {
              id_usuario: {
                bsonType: "int",
                description: "ID de usuario"
              },
              nombres: {
                bsonType: "string",
                maxLength: 20,
                description: "Nombres del usuario"
              },
              apellido_paterno: {
                bsonType: "string",
                maxLength: 20,
                description: "Apellido paterno del usuario"
              },
              apellido_materno: {
                bsonType: "string",
                maxLength: 20,
                description: "Apellido materno del usuario"
              },
              DNI: {
                bsonType: "int",
                minimum: 10000000,
                maximum: 99999999,
                description: "DNI (entero de 8 dígitos)"
              },
              correo: {
                bsonType: "string",
                description: "Correo electrónico del usuario"
              },
              numero_telefonico: {
                bsonType: "int",
                minimum: 100000000,
                maximum: 999999999,
                description: "Número telefónico (entero de 9 dígitos)"
              },
              contraseña: {
                bsonType: "string",
                description: "Contraseña del usuario"
              },
              mascotas: {
                bsonType: "array",
                description: "Arreglo de mascotas"
              },
              roles: {
               bsonType: "array",
               description: "Arreglo de roles"
             }
            }
        }
        
    }
});


db.createCollection("Ubicacion", {
    validator: {
       $jsonSchema: {
          bsonType: "object",
          required: ["id_ubicacion","id_usuario", "distrito", "provincia", "departamento", "mas_detalles"],
          properties: {
             id_ubicacion: {
                bsonType: "int",
                description: "ID de la ubicacion"
             },
             id_usuario: {
               bsonType: "int",
               description: "ID del usuario"
            },
             distrito: {
                bsonType: "string",
                maxLength: 50,
                description: "Distrito"
             },
             provincia: {
                bsonType: "string",
                maxLength: 50,
                description: "Provincia"
             },
             departamento: {
                bsonType: "string",
                maxLength: 50,
                description: "Departamento"
             },
             mas_detalles: {
                bsonType: "string",
                maxLength: 50,
                description: "Referencias"
             }
          }
       }
    }
}); 


db.createCollection("Roles", {
    validator: {
       $jsonSchema: {
          bsonType: "object",
          required: ["id_rol", "nombre_rol"],
          properties: {
             id_ubicacion: {
                bsonType: "int",
                description: "ID del rol"
             },
             distrito: {
                bsonType: "string",
                maxLength: 20,
                description: "nombre_rol"
             }
          }
       }
    }
}); 

db.createCollection("Formulario_Adopcion", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         required: ["id_formulario", "preguntas", "respuestas"],
         properties: {
            id_formulario: {
               bsonType: "int",
               description: "El ID del formulario debe ser un entero."
            },
            preguntas: {
               bsonType: "string",
               description: "Las preguntas deben ser una cadena de caracteres.",
               maxLength: 1000
            },
            respuestas: {
               bsonType: "string",
               description: "Las respuestas deben ser una cadena de caracteres.",
               maxLength: 1000
            }
         }
      }
   }
})

db.createCollection("Solicitudes_Adopción", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         required: ["id_solicitud", "id_usuario", "id_formulario", "fecha_solicitud", "estado_actual"],
         properties: {
            id_solicitud: {
               bsonType: "int",
               description: "ID de la solicitud"
            },
            id_usuario: {
               bsonType: "int",
               description: "ID del usuario"
            },
            id_formulario: {
               bsonType: "int",
               description: "ID del formulario"
            },
            fecha_solicitud: {
               bsonType: "date",
               description: "Fecha de la solicitud"
            },
            estado_actual: {
               bsonType: "string",
               description: "Estado actual de la solicitud",
               enum: ["pendiente", "aprobada", "rechazada"]
            }
         }
      }
   }
})

 // ------------------------------------- MASCOTAS ------------------------------------------

db.createCollection("Mascotas", {
    validator: {
        $jsonSchema: 
        {
            bsonType: "object",
            required: ["id_mascota", "nombre", "edad", "origen", "tamaño", "descripción", "imagen", "id_especie", "id_raza"],
            properties: {
              id_mascota: {
                bsonType: "int",
                description: "ID de la mascota (entero)"
              },
              nombre: {
                bsonType: "string",
                maxLength: 20,
                description: "Nombre de la mascota"
              },
              edad: {
                bsonType: "int",
                description: "Edad de la mascota (entero)"
              },
              origen: {
                bsonType: "string",
                maxLength: 300,
                description: "Origen de la mascota"
              },
              tamaño: {
                bsonType: "int",
                description: "Tamaño de la mascota (cm)"
              },
              descripción: {
                bsonType: "string",
                maxLength: 2000,
                description: "Descripción de la mascota"
              },
              imagen: {
                bsonType: "string",
                description: "Imagen de la mascota"
              },
              id_especie: {
               bsonType: "int",
               description: "Especie de la Mascota"
             },
             id_raza: {
               bsonType: "int",
               description: "Raza de la Mascota"
             }
            }
        }        
        
    }
});

db.createCollection("Especies_Mascotas", {
    validator: {
       $jsonSchema: {
          bsonType: "object",
          required: ["id_especie", "nombre_especie"],
          properties: {
             id_especie: {
                bsonType: "int",
                description: "ID de la especie"
             },
             nombre_especie: {
                bsonType: "string",
                maxLength: 300,
                description: "Nombre de la especie"
             }
          }
       }
    }
}); 

db.createCollection("Razas_Mascotas", {
    validator: {
       $jsonSchema: {
          bsonType: "object",
          required: ["id_raza", "nombre_raza"],
          properties: {
             id_raza: {
                bsonType: "int",
                description: "ID de la raza"
             },
             nombre_raza: {
                bsonType: "string",
                maxLength: 300,
                description: "Nombre de la raza"
             }
          }
       }
    }
}); 
 
db.createCollection("Historial_Medico", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         required: ["id_historial", "id_mascota", "id_vacuna", "id_condiciones_medicas", "fecha_diagnostico", "descripcion_tratamiento"],
         properties: {
            id_historial: {
               bsonType: "int",
               description: "ID del historial medico"
            },
            id_mascota: {
               bsonType: "int",
               description: "ID de la mascota"
            },
            id_vacuna: {
               bsonType: "int",
               description: "ID de la vacuna"
            },
            id_condiciones_medicas: {
               bsonType: "int",
               description: "ID de las condiciones medicas"
            },
            fecha_diagnostico: {
               bsonType: "date",
               description: "Fecha del diagnosticos"
            },
            descripcion_tratamiento: {
               bsonType: "string",
               maxLength: 20000,
               description: "Descripcion del tratamiento"
            }
         }
      }
   }
})

db.createCollection("Condiciones_Medicas", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         required: ["id_condiciones_medicas", "descripcion"],
         properties: {
            id_condiciones_medicas: {
               bsonType: "int",
               description: "ID de la condicion medica"
            },
            descripcion: {
               bsonType: "string",
               description: "La descripción debe ser una cadena de caracteres.",
               maxLength: 100
            }
         }
      }
   }
})

db.createCollection("Vacunas_Mascotas", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         required: ["id_vacuna", "nombre_vacuna", "fecha_vacunacion"],
         properties: {
            id_vacuna: {
               bsonType: "int",
               description: "ID de la vacuna, entero"
            },
            nombre_vacuna: {
               bsonType: "string",
               maxLength: 20,
               description: "Nombre de la vacuna"
            },
            fecha_vacunacion: {
               bsonType: "date",
               description: "Fecha de vacunación"
            }
         }
      }
   }
})


