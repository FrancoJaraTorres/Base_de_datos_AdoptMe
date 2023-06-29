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
        "direccion": [
            {
                "distrito": "Santa Cruz de Andamarca", 
                "provincia": "Barranca", 
                "departamento": "Lima", 
                "mas_detalles": "Jirón Las Palmeras 789, Yurimaguas"
            },
            {
                "distrito": "Pebas", 
                "provincia": "Mariscal Ramón Castilla", 
                "departamento": "Loreto", 
                "mas_detalles": "Calle Los Tucanes 123, Santa Rosa"
            },
            {
                "distrito": "Challabamba", 
                "provincia": "Paucartambo", 
                "departamento": "Cusco", 
                "mas_detalles": "Calle Progreso 234, Requena"
            }
        ], 
        
        "roles": [
            "Adoptante", "Dueño Previo","ONG"
        ],

        "solicitudes": [
            {
                "id_solicitud":"01",
                "fecha_solicitud":ISODate("2021-06-15T09:30:00Z"),
                "formulario":
                    [{
                        "preguntas": "¿Está usted familiarizado con las responsabilidades de cuidar a una mascota?",
                        "respuestas": "Sí, he investigado y comprendo las responsabilidades necesarias para cuidar a una mascota."
                    },
                    {  
                        "preguntas": "¿Tiene usted un espacio adecuado para proporcionar un entorno seguro y cómodo para la mascota?",
                        "respuestas": "Sí, cuento con un hogar espacioso y seguro donde la mascota pueda vivir cómodamente."

                    },
                    {
                        "preguntas": "¿Está dispuesto a comprometerse con los cuidados veterinarios necesarios, como vacunaciones y chequeos regulares?",
                        "respuestas": "Sí, estoy comprometido a brindar los cuidados veterinarios necesarios para mantener a la mascota sana y feliz."
                    }],
                "estado":"Aprobado"
            },
            {
                "id_solicitud":"02",
                "fecha_solicitud":ISODate("2022-06-15T09:30:00Z"),
                "formulario":
                    [{
                        "preguntas": "¿Está usted familiarizado con las responsabilidades de cuidar a una mascota?",
                        "respuestas": "Sí, he investigado y comprendo las responsabilidades necesarias para cuidar a una mascota."
                    },
                    {  
                        "preguntas": "¿Tiene usted un espacio adecuado para proporcionar un entorno seguro y cómodo para la mascota?",
                        "respuestas": "Sí, cuento con un hogar espacioso y seguro donde la mascota pueda vivir cómodamente."

                    },
                    {
                        "preguntas": "¿Está dispuesto a comprometerse con los cuidados veterinarios necesarios, como vacunaciones y chequeos regulares?",
                        "respuestas": "Sí, estoy comprometido a brindar los cuidados veterinarios necesarios para mantener a la mascota sana y feliz."
                    }],
                "estado":"Aprobado"
            },
            {
                "id_solicitud":"03",
                "fecha_solicitud":ISODate("2023-06-15T09:30:00Z"),
                "formulario":
                    [{
                        "preguntas": "¿Está usted familiarizado con las responsabilidades de cuidar a una mascota?",
                        "respuestas": "Sí, he investigado y comprendo las responsabilidades necesarias para cuidar a una mascota."
                    },
                    {  
                        "preguntas": "¿Tiene usted un espacio adecuado para proporcionar un entorno seguro y cómodo para la mascota?",
                        "respuestas": "Sí, cuento con un hogar espacioso y seguro donde la mascota pueda vivir cómodamente."

                    },
                    {
                        "preguntas": "¿Está dispuesto a comprometerse con los cuidados veterinarios necesarios, como vacunaciones y chequeos regulares?",
                        "respuestas": "Sí, estoy comprometido a brindar los cuidados veterinarios necesarios para mantener a la mascota sana y feliz."
                    }], 
                "estado":"Pendiente"
            },
        ],
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
        "direccion": [
            {
                "distrito": "Santa Cruz de Andamarca", 
                "provincia": "Barranca", 
                "departamento": "Lima", 
                "mas_detalles": "Jirón Las Palmeras 789, Yurimaguas"
            },
            {
                "distrito": "Pebas", 
                "provincia": "Mariscal Ramón Castilla", 
                "departamento": "Loreto", 
                "mas_detalles": "Calle Los Tucanes 123, Santa Rosa"
            },
            {
                "distrito": "Challabamba", 
                "provincia": "Paucartambo", 
                "departamento": "Cusco", 
                "mas_detalles": "Calle Progreso 234, Requena"
            }
        ], 
        
        "roles": [
            "Adoptante", "Dueño Previo","ONG"
        ],

        "solicitudes": [
            {
                "id_solicitud":"01",
                "fecha_solicitud":ISODate("2021-06-15T09:30:00Z"),
                "formulario":
                    [{
                        "preguntas": "¿Está usted familiarizado con las responsabilidades de cuidar a una mascota?",
                        "respuestas": "Sí, he investigado y comprendo las responsabilidades necesarias para cuidar a una mascota."
                    },
                    {  
                        "preguntas": "¿Tiene usted un espacio adecuado para proporcionar un entorno seguro y cómodo para la mascota?",
                        "respuestas": "Sí, cuento con un hogar espacioso y seguro donde la mascota pueda vivir cómodamente."

                    },
                    {
                        "preguntas": "¿Está dispuesto a comprometerse con los cuidados veterinarios necesarios, como vacunaciones y chequeos regulares?",
                        "respuestas": "Sí, estoy comprometido a brindar los cuidados veterinarios necesarios para mantener a la mascota sana y feliz."
                    }],
                "estado":"Aprobado"
            },
            {
                "id_solicitud":"02",
                "fecha_solicitud":ISODate("2022-06-15T09:30:00Z"),
                "formulario":
                    [{
                        "preguntas": "¿Está usted familiarizado con las responsabilidades de cuidar a una mascota?",
                        "respuestas": "Sí, he investigado y comprendo las responsabilidades necesarias para cuidar a una mascota."
                    },
                    {  
                        "preguntas": "¿Tiene usted un espacio adecuado para proporcionar un entorno seguro y cómodo para la mascota?",
                        "respuestas": "Sí, cuento con un hogar espacioso y seguro donde la mascota pueda vivir cómodamente."

                    },
                    {
                        "preguntas": "¿Está dispuesto a comprometerse con los cuidados veterinarios necesarios, como vacunaciones y chequeos regulares?",
                        "respuestas": "Sí, estoy comprometido a brindar los cuidados veterinarios necesarios para mantener a la mascota sana y feliz."
                    }],
                "estado":"Aprobado"
            },
            {
                "id_solicitud":"03",
                "fecha_solicitud":ISODate("2023-06-15T09:30:00Z"),
                "formulario":
                    [{
                        "preguntas": "¿Está usted familiarizado con las responsabilidades de cuidar a una mascota?",
                        "respuestas": "Sí, he investigado y comprendo las responsabilidades necesarias para cuidar a una mascota."
                    },
                    {  
                        "preguntas": "¿Tiene usted un espacio adecuado para proporcionar un entorno seguro y cómodo para la mascota?",
                        "respuestas": "Sí, cuento con un hogar espacioso y seguro donde la mascota pueda vivir cómodamente."

                    },
                    {
                        "preguntas": "¿Está dispuesto a comprometerse con los cuidados veterinarios necesarios, como vacunaciones y chequeos regulares?",
                        "respuestas": "Sí, estoy comprometido a brindar los cuidados veterinarios necesarios para mantener a la mascota sana y feliz."
                    }], 
                "estado":"Pendiente"
            },
        ],
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
        "direccion": [
            {
                "distrito": "Santa Cruz de Andamarca", 
                "provincia": "Barranca", 
                "departamento": "Lima", 
                "mas_detalles": "Jirón Las Palmeras 789, Yurimaguas"
            },
            {
                "distrito": "Pebas", 
                "provincia": "Mariscal Ramón Castilla", 
                "departamento": "Loreto", 
                "mas_detalles": "Calle Los Tucanes 123, Santa Rosa"
            },
            {
                "distrito": "Challabamba", 
                "provincia": "Paucartambo", 
                "departamento": "Cusco", 
                "mas_detalles": "Calle Progreso 234, Requena"
            }
        ], 
        
        "roles": [
            "Adoptante", "Dueño Previo","ONG"
        ],

        "solicitudes": [
            {
                "id_solicitud":"01",
                "fecha_solicitud":ISODate("2021-06-15T09:30:00Z"),
                "formulario":
                    [{
                        "preguntas": "¿Está usted familiarizado con las responsabilidades de cuidar a una mascota?",
                        "respuestas": "Sí, he investigado y comprendo las responsabilidades necesarias para cuidar a una mascota."
                    },
                    {  
                        "preguntas": "¿Tiene usted un espacio adecuado para proporcionar un entorno seguro y cómodo para la mascota?",
                        "respuestas": "Sí, cuento con un hogar espacioso y seguro donde la mascota pueda vivir cómodamente."

                    },
                    {
                        "preguntas": "¿Está dispuesto a comprometerse con los cuidados veterinarios necesarios, como vacunaciones y chequeos regulares?",
                        "respuestas": "Sí, estoy comprometido a brindar los cuidados veterinarios necesarios para mantener a la mascota sana y feliz."
                    }],
                "estado":"Aprobado"
            },
            {
                "id_solicitud":"02",
                "fecha_solicitud":ISODate("2022-06-15T09:30:00Z"),
                "formulario":
                    [{
                        "preguntas": "¿Está usted familiarizado con las responsabilidades de cuidar a una mascota?",
                        "respuestas": "Sí, he investigado y comprendo las responsabilidades necesarias para cuidar a una mascota."
                    },
                    {  
                        "preguntas": "¿Tiene usted un espacio adecuado para proporcionar un entorno seguro y cómodo para la mascota?",
                        "respuestas": "Sí, cuento con un hogar espacioso y seguro donde la mascota pueda vivir cómodamente."

                    },
                    {
                        "preguntas": "¿Está dispuesto a comprometerse con los cuidados veterinarios necesarios, como vacunaciones y chequeos regulares?",
                        "respuestas": "Sí, estoy comprometido a brindar los cuidados veterinarios necesarios para mantener a la mascota sana y feliz."
                    }],
                "estado":"Aprobado"
            },
            {
                "id_solicitud":"03",
                "fecha_solicitud":ISODate("2023-06-15T09:30:00Z"),
                "formulario":
                    [{
                        "preguntas": "¿Está usted familiarizado con las responsabilidades de cuidar a una mascota?",
                        "respuestas": "Sí, he investigado y comprendo las responsabilidades necesarias para cuidar a una mascota."
                    },
                    {  
                        "preguntas": "¿Tiene usted un espacio adecuado para proporcionar un entorno seguro y cómodo para la mascota?",
                        "respuestas": "Sí, cuento con un hogar espacioso y seguro donde la mascota pueda vivir cómodamente."

                    },
                    {
                        "preguntas": "¿Está dispuesto a comprometerse con los cuidados veterinarios necesarios, como vacunaciones y chequeos regulares?",
                        "respuestas": "Sí, estoy comprometido a brindar los cuidados veterinarios necesarios para mantener a la mascota sana y feliz."
                    }], 
                "estado":"Pendiente"
            },
        ],
    }
]);

db.Donaciones.insertMany([
    {
        "id_donacion":1,
        "id_usuario":1,
        "tipo_donacion":[
            {
                "fecha":ISODate("2022-01-17T11:00:00Z"),
                "descripcion":"Se realizo una donacion en efectivo",
                "monto":"100$"
            },
            {
                "fecha":ISODate("2022-06-17T11:00:00Z"),
                "descripcion":"Se realizo una donacion en efectivo",
                "monto":"50$"
            },
            {
                "fecha":ISODate("2022-02-17T11:00:00Z"),
                "descripcion":"Se realizo una donacion en efectivo",
                "monto":"70$"
            }
    ]},
    {
        "id_donacion":2,
        "id_usuario":2,
        "tipo_donacion":[
            {
                "fecha":ISODate("2022-01-17T11:00:00Z"),
                "descripcion":"Se realizo una donacion en efectivo",
                "monto":"100$"
            },
            {
                "fecha":ISODate("2022-03-17T11:00:00Z"),
                "descripcion":"Se realizo una donacion en efectivo",
                "monto":"50$"
            },
            {
                "fecha":ISODate("2022-06-17T11:00:00Z"),
                "descripcion":"Se realizo una donacion en efectivo",
                "monto":"70$"
            }
    ]},
    {
        "id_donacion":3,
        "id_usuario":3,
        "tipo_donacion":[
            {
                "fecha":ISODate("2022-02-17T11:00:00Z"),
                "descripcion":"Se realizo una donacion en efectivo",
                "monto":"100$"
            },
            {
                "fecha":ISODate("2022-04-17T11:00:00Z"),
                "descripcion":"Se realizo una donacion en efectivo",
                "monto":"50$"
            },
            {
                "fecha":ISODate("2022-07-17T11:00:00Z"),
                "descripcion":"Se realizo una donacion en efectivo",
                "monto":"70$"
            }
    ]}

]);

db.Publicaciones.insertMany([
    {
        "id_publicacion":1,
        "id_usuario":1,
        "fecha":ISODate("2023-01-17T11:00:00Z"),
        "contenido":"Estamos emocionados de presentar a nuestro nuevo cachorro, Max! Es un adorable Labrador Retriever, es juguetón, cariñoso y le encanta explorar su entorno.",
        "respuestas": [
            "¡Felicidades por la llegada de Max! Se ve absolutamente encantador en la foto.",
            "¡Qué hermoso cachorro! Los Labradores son conocidos por su amabilidad y su disposición para jugar.",
            "¡No puedo resistir esa carita! Max es tan lindo."
        ]
    },
    {
        "id_publicacion":2,
        "id_usuario":2,
        "fecha":ISODate("2023-02-17T11:00:00Z"),
        "contenido":"Queremos compartir con todos ustedes la llegada de nuestro nuevo gatito, Luna. Es una gatita de 3 meses de edad con un pelaje suave y hermosos ojos verdes. Luna es juguetona, curiosa y muy cariñosa.",
        "respuestas": [
            "¡Felicidades por la llegada de Luna! Los gatos son compañeros maravillosos.",
            "¡Qué belleza de gatita! Los gatos son conocidos por su curiosidad y su personalidad independiente.",
            "¡Bienvenida, Luna! Los gatos son animales fascinantes y llenos de misterio."
        ]

    },
    {
        "id_publicacion":3,
        "id_usuario":3,
        "fecha":ISODate("2023-03-17T11:00:00Z"),
        "contenido":"¡Queremos presentarles a nuestro adorable conejito, Caramel! Caramel tiene 4 meses de edad y es una bolita de pelo suave y esponjoso. Es curioso, juguetón y le encanta saltar por todos lados.",
        "respuestas": [
            "¡Felicidades por la llegada de Caramel! Los conejos son mascotas adorables y llenas de energía.",
            "¡Qué lindo conejito! Es maravilloso tener una mascota tan esponjosa.",
            "¡No puedo evitar sonreír al ver a Caramel! Los conejos pueden ser tan divertidos y llenos de vida."
        ]
    }
]);

// ------------------------------------- MASCOTAS ------------------------------------------

db.Mascotas.insertMany([
    {
        "id_mascota": 1, 
        "nombre": "Luna", 
        "edad": 3, 
        "origen": "Criado por Breeder", 
        "tamaño": 46, 
        "descripción": "Luna es una encantadora Labrador Retriever de pelaje negro. Tiene tres años de edad y es una hembra muy cariñosa y juguetona. Es de tamaño mediano y tiene una personalidad amigable. Le encanta pasear y jugar en el parque.", 
        "imagen": "mascota1.jpge",
        "especie":"Perro",
        "raza": "Labrador Retriever",
        "estado_actual":"Actualmente se encuentra bien de salud",
        "historial_medico":[
            {
                "fecha_diagnostico": ISODate("2022-01-17T11:00:00Z"),
                "descripcion_tratamiento": "El perro recibió medicación para tratar una infección intestinal.",
                "vacunas":["Vacuna A","Vacuna B","Vacuna C"],
            },
            {
                "fecha_diagnostico": ISODate("2022-05-17T11:00:00Z"),
                "descripcion_tratamiento": "El perro recibió medicación para tratar una infección de pulgas.",
                "vacunas":["Vacuna D","Vacuna E","Vacuna F"],
            },
            {
                "fecha_diagnostico": ISODate("2022-08-17T11:00:00Z"),
                "descripcion_tratamiento": "El perro recibió medicación para tratar una fractura en la pata.",
                "vacunas":["Vacuna G","Vacuna H","Vacuna I"],
            }
        ]
    },
    {
        "id_mascota": 2, 
        "nombre": "Simba", 
        "edad": 2, 
        "origen": "Proveniente del Refugio de animales local XYZ", 
        "tamaño": 31, 
        "descripción": "Simba es un impresionante gato Maine Coon de dos años de edad. Tiene un pelaje largo y suave en tonos de naranja y blanco. Es un macho muy tranquilo y afectuoso. A pesar de su gran tamaño, es juguetón y le gusta descansar en lugares altos.", 
        "imagen": "mascota2.jpge",
        "especie":"Gato",
        "raza": "Maine Coon",
        "estado_actual":"Actualmente se encuentra bien de salud",
        "historial_medico":[
            {
                "fecha_diagnostico": ISODate("2021-02-17T11:00:00Z"),
                "descripcion_tratamiento": "El gato recibió una operacion para tratar una hernia.",
                "vacunas":["Vacuna J","Vacuna K","Vacuna K"],
            },
            {
                "fecha_diagnostico": ISODate("2021-04-17T11:00:00Z"),
                "descripcion_tratamiento": "El gato recibió medicación para tratar una infección en el estomago.",
                "vacunas":["Vacuna M","Vacuna N","Vacuna Ñ"],
            },
            {
                "fecha_diagnostico": ISODate("2021-07-17T11:00:00Z"),
                "descripcion_tratamiento": "El gato recibió medicación para tratar una fractura en la pata.",
                "vacunas":["Vacuna O","Vacuna P","Vacuna Q"],
            }
        ]
    },
    {
        "id_mascota": 3, 
        "nombre": "Kiara", 
        "edad": 1, 
        "origen": "Proveniente de la Organización de rescate ABC", 
        "tamaño": 51, 
        "descripción": "Kiara es un adorable conejo Holandés Enano de un año de edad. Tiene un pelaje suave en tonos de marrón y blanco. Es una hembra muy curiosa y activa. A pesar de su tamaño pequeño, le encanta explorar y saltar por el jardín. Es una mascota ideal para familias con niños.", 
        "imagen": "mascota3.jpge",
        "especie":"Conejo",
        "raza": "Conejo Holandés",
        "estado_actual":"Actualmente se encuentra bien de salud",
        "historial_medico":[
            {
                "fecha_diagnostico": ISODate("2020-01-17T11:00:00Z"),
                "descripcion_tratamiento": "El conejo recibió medicación para tratar una infección en la piel.",
                "vacunas":["Vacuna R","Vacuna S","Vacuna T"],
            },
            {
                "fecha_diagnostico": ISODate("2020-03-17T11:00:00Z"),
                "descripcion_tratamiento": "El conejo recibió medicación para tratar la coccidiosis .",
                "vacunas":["Vacuna U","Vacuna V","Vacuna W"],
            },
            {
                "fecha_diagnostico": ISODate("2020-09-17T11:00:00Z"),
                "descripcion_tratamiento": "El conejo recibió medicación para tratar Neumonía.",
                "vacunas":["Vacuna X","Vacuna Y","Vacuna Z"],
            }
        ]
    }
]);




