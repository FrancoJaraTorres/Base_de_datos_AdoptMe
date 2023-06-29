
use("AdoptMe");


 // ------------------------------------- USUARIOS ------------------------------------------

db.createCollection("Usuarios", {
    validator: {
        $jsonSchema: 
        {
            bsonType: "object",
            required: ["id_usuario", "nombres", "apellido_paterno","apellido_materno", "DNI", "correo", "numero_telefonico", 
            "contraseña","direccion","roles","solicitudes"],
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
              direccion: {
               bsonType: "array",
               description: "Arreglo de ubicaciones"
             },
             roles: {
               bsonType: "array",
               description: "Arreglo de roles"
             },
             solicitudes: {
               bsonType: "array",
               description: "Arreglo de solicitudes"
             }
            }
        }
        
    }
});

db.createCollection("Donaciones", {
   validator: {
       $jsonSchema: 
       {
           bsonType: "object",
           required: ["id_donacion", "id_usuario", "tipo_donacion"],
           properties: {
            id_donacion: {
               bsonType: "int",
               description: "ID de la donacion"
             },
             id_usuario: {
               bsonType: "int",
               description: "ID del usuario"
             },
             tipo_donacion: {
               bsonType: "array",
               description: "Arreglo de donaciones",
               items: {
                  bsonType: "object",
                  required: ["fecha", "descripcion", "monto"],
                  properties: {
                      fecha: {
                          bsonType: "date",
                          description: "Fecha de la donación"
                      },
                      descripcion: {
                          bsonType: "string",
                          description: "Descripción de la donación"
                      },
                      monto: {
                          bsonType: "string",
                          description: "Monto de la donación"
                      }
                     }
                  }
            }
         }
         
      }   
   }
});

db.createCollection("Publicaciones", {
   validator: {
       $jsonSchema: 
       {
           bsonType: "object",
           required: ["id_publicacion", "id_usuario","fecha", "contenido","respuestas"],
           properties: {
            id_publicacion: {
               bsonType: "int",
               description: "ID de Publicacion"
             },
             id_usuario: {
               bsonType: "int",
               description: "id del usuario"
             },
             fecha: {
               bsonType: "date",
               description: "Fecha de la publicacion"
           },
             contenido: {
               bsonType: "string",
               description: "contenido de la publicacion"
             },
             respuestas: {
               bsonType: "array",
               description: "respuestas a la publicacion"
             }
           }
       }
       
   }
});
 // ------------------------------------- MASCOTAS ------------------------------------------

db.createCollection("Mascotas", {
    validator: {
        $jsonSchema: 
        {
            bsonType: "object",
            required: ["id_mascota", "nombre", "edad", "origen", "tamaño", "descripción", "imagen", 
            "especie", "raza","estado_actual", "historial_medico"],
            
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
              especie: {
               bsonType: "string",
               description: "Especie de la Mascota"
             },
             raza: {
               bsonType: "string",
               description: "Raza de la Mascota"
             },
             estado_actual: {
               bsonType: "string",
               description: "Estado actual de la mascota"
             },
             historial_medico: {
               bsonType: "array",
               description: "Array del Historial medico de la mascota"
             }
            }
        }        
        
    }
});


