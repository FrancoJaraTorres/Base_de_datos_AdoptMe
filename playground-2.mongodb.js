use("AdoptMe");

// ------------------------------------- Usuarios ------------------------------------------

db.Usuarios.insertMany([
    {
        "id_usuario": 1, 
        "nombres": "Josehp Piero", 
        "apellido_paterno": "Herrera", 
        "apellido_materno": "del Pino", 
        "DNI": 12345678, 
        "correo": "josehp@gamil.com", 
        "numero_telefonico": 987654321, 
        "contraseña": "aegnboawd_13!", 
        "mascotas": [
            { "id_mascota": 1},{ "id_mascota": 2,},{"id_mascota": 3,}
        ],
        "roles": [
            { "id_rol": 1},{ "id_rol": 4}
        ]
    },
    {
        "id_usuario": 2, 
        "nombres": "Randy Becker", 
        "apellido_paterno": "Rengifo", 
        "apellido_materno": "Mirabal", 
        "DNI": 12345679, 
        "correo": "randy12@gamil.com", 
        "numero_telefonico": 987654322, 
        "contraseña": "aegaegmu896=", 
        "mascotas": [
            { "id_mascota": 1},{ "id_mascota": 2,},{"id_mascota": 3,}
        ], 
        "roles": [
            { "id_rol": 1},{ "id_rol": 4}
        ]
    },
    {
        "id_usuario": 3, 
        "nombres": "Franco Renato", 
        "apellido_paterno": "Jara", 
        "apellido_materno": "Torres", 
        "DNI": 12345671, 
        "correo": "franco@gamil.com", 
        "numero_telefonico": 987654329, 
        "contraseña": "aegnboawd_13!", 
        "mascotas": [
            { "id_mascota": 1},{ "id_mascota": 2,},{"id_mascota": 3,}
        ],
        "roles": [
            { "id_rol": 2},{ "id_rol": 4}
        ]
    }
]);

db.Ubicacion.insertMany([
    {
        "id_ubicacion": 1,
        "id_usuario": 1,
        "distrito": "Santa Cruz de Andamarca", 
        "provincia": "Barranca", 
        "departamento": "Lima", 
        "mas_detalles": "Jirón Las Palmeras 789, Yurimaguas"
    },
    {
        "id_ubicacion": 2,
        "id_usuario": 2,
        "distrito": "Pebas", 
        "provincia": "Mariscal Ramón Castilla", 
        "departamento": "Loreto", 
        "mas_detalles": "Calle Los Tucanes 123, Santa Rosa"
    },
    {
        "id_ubicacion": 3,
        "id_usuario": 3,
        "distrito": "Challabamba", 
        "provincia": "Paucartambo", 
        "departamento": "Cusco", 
        "mas_detalles": "Calle Progreso 234, Requena"
    }
])

db.Roles.insertMany([
    {   
        "id_rol": 1,
        "nombre_rol":"Dueño Previo"
    },
    {
        "id_rol": 2,
        "nombre_rol":"Refugio de animales"
    },
    {
        "id_rol": 3,
        "nombre_rol":"Organización de rescate de animales"
    },
    {
        "id_rol": 4,
        "nombre_rol":"Adoptante"
    }
])

db.Formulario_Adopcion.insertMany([
    {
        "id_formulario": 1,
        "preguntas": "¿Está usted familiarizado con las responsabilidades de cuidar a una mascota?",
        "respuestas": "Sí, he investigado y comprendo las responsabilidades necesarias para cuidar a una mascota."
    },
    {
        "id_formulario": 2,
        "preguntas": "¿Tiene usted un espacio adecuado para proporcionar un entorno seguro y cómodo para la mascota?",
        "respuestas": "Sí, cuento con un hogar espacioso y seguro donde la mascota pueda vivir cómodamente."
    },
    {
        "id_formulario": 3,
        "preguntas": "¿Está dispuesto a comprometerse con los cuidados veterinarios necesarios, como vacunaciones y chequeos regulares?",
        "respuestas": "Sí, estoy comprometido a brindar los cuidados veterinarios necesarios para mantener a la mascota sana y feliz."
    }
])

db.Solicitudes_Adopción.insertMany([
    {
        "id_solicitud": 1,
        "id_usuario": 1,
        "id_formulario": 1 ,
        "fecha_solicitud": ISODate("2023-06-15T09:30:00Z"),
        "estado_actual": "aprobada"
    },
    {
        "id_solicitud": 2,
        "id_usuario": 2,
        "id_formulario": 2 ,
        "fecha_solicitud": ISODate("2023-06-15T09:30:00Z"),
        "estado_actual": "aprobada"
    },
    {
        "id_solicitud": 3,
        "id_usuario":3 ,
        "id_formulario": 3 ,
        "fecha_solicitud": ISODate("2023-06-15T09:30:00Z"),
        "estado_actual": "aprobada"
    }
])
// ------------------------------------- MASCOTAS ------------------------------------------


db.Mascotas.insertMany([
    {
        "id_mascota": 1, 
        "nombre": "Luna", 
        "edad": 3, 
        "origen": "Criado por Breeder", 
        "tamaño": 46    , 
        "descripción": "Luna es una encantadora Labrador Retriever de pelaje negro. Tiene tres años de edad y es una hembra muy cariñosa y juguetona. Es de tamaño mediano y tiene una personalidad amigable. Le encanta pasear y jugar en el parque.", 
        "imagen": "mascota1.jpge",
        "id_especie": 1 ,
        "id_raza": 1 ,
    },
    {
        "id_mascota": 2, 
        "nombre": "Simba", 
        "edad": 2, 
        "origen": "Proveniente del Refugio de animales local XYZ", 
        "tamaño": 31, 
        "descripción": "Simba es un impresionante gato Maine Coon de dos años de edad. Tiene un pelaje largo y suave en tonos de naranja y blanco. Es un macho muy tranquilo y afectuoso. A pesar de su gran tamaño, es juguetón y le gusta descansar en lugares altos.", 
        "imagen": "mascota2.jpge",
        "id_especie":2 ,
        "id_raza": 2,
    },
    {
        "id_mascota": 3, 
        "nombre": "Kiara", 
        "edad": 1, 
        "origen": "Proveniente de la Organización de rescate ABC", 
        "tamaño": 51, 
        "descripción": "Kiara es un adorable conejo Holandés Enano de un año de edad. Tiene un pelaje suave en tonos de marrón y blanco. Es una hembra muy curiosa y activa. A pesar de su tamaño pequeño, le encanta explorar y saltar por el jardín. Es una mascota ideal para familias con niños.", 
        "imagen": "mascota3.jpge",
        "id_especie":3 ,
        "id_raza":3 ,

    }
]);

db.Especies_Mascotas.insertMany([

    {
        "id_especie": 1 ,
        "nombre_especie": "Perros"
    },
    {
        "id_especie": 2 ,
        "nombre_especie": "Gatos"
    },
    {
        "id_especie": 3 ,
        "nombre_especie": "Conejos"
    }
])

db.Razas_Mascotas.insertMany([
    {
        "id_raza": 1 ,
        "nombre_raza": "Labrador Retriever"
    },
    {
        "id_raza": 2 ,
        "nombre_raza": "Maine Coon"
    },
    {
        "id_raza": 3 ,
        "nombre_raza": "Conejo Holandés"
    }
])

db.Historial_Medico.insertMany([  // ELIMINAR Y HACER REFERENCIA DE UNO A MUCHOS
    {
      "id_historial": 1,
      "id_mascota": 1,
      "id_vacuna": 1,
      "id_condiciones_medicas": 1,
      "fecha_diagnostico": ISODate("2023-06-17T11:00:00Z"),
      "descripcion_tratamiento": "El perro recibió medicación para tratar una infección respiratoria."
    },
    {
      "id_historial": 2,
      "id_mascota": 2,
      "id_vacuna": 2,
      "id_condiciones_medicas": 2,
      "fecha_diagnostico": ISODate("2023-06-17T11:00:00Z"),
      "descripcion_tratamiento": "El gato fue sometido a una cirugía para corregir una fractura en una pata."
    },
    {
      "id_historial": 3,
      "id_mascota": 3,
      "id_vacuna": 3,
      "id_condiciones_medicas": 2,
      "fecha_diagnostico": ISODate("2023-06-17T11:00:00Z"),
      "descripcion_tratamiento": "El conejo recibió terapia física para rehabilitar una lesión en la columna vertebral."
    }
])

db.Condiciones_Medicas.insertMany([
    {
        "id_condiciones_medicas": 1,
        "descripcion": "Actualmente se encuentra bien de salud"
    },
    {
        "id_condiciones_medicas": 2,
        "descripcion": "Actualmente se encuentra recuperado totalmente de la fractura"
    },
    {
        "id_condiciones_medicas": 3,
        "descripcion": "Actualmente se encuentra recuperado totalmente de la lesion"
    }

])
  
db.Vacunas_Mascotas.insertMany([
    {
        "id_vacuna": 1,
        "nombre_vacuna": "Vacuna A",
        "fecha_vacunacion": ISODate("2023-06-15T09:30:00Z")
    },
    {
        "id_vacuna": 2,
        "nombre_vacuna": "Vacuna B",
        "fecha_vacunacion": ISODate("2023-06-16T14:45:00Z")
    },
    {
        "id_vacuna": 3,
        "nombre_vacuna": "Vacuna C",
        "fecha_vacunacion": ISODate("2023-06-17T11:00:00Z")
    }
])





