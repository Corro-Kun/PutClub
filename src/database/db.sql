create table protitute(
    id int not null primary key AUTO_INCREMENT,
    name varchar(50) not null,
    descripcion text,
    url text,
    status varchar(30),
    age varchar(30),
    punctuation varchar(30),
    worth int
);

insert into protitute (name, descripcion, url, status, age, punctuation, worth) values (
    'Camila', 
    'una chica hermosa con 2 atributos muy decentes y un culaso ufffff cosa de locos',
    'https://i.pinimg.com/474x/13/76/46/137646e9ddcccae6933bc685a26f5ce4.jpg',
    'Casi virgen',
    25,
    'Exelente para sentones',
    115);

insert into protitute (name, descripcion, url, status, age, punctuation, worth) values (
    'Valentina', 
    'una atletica chica con todo en donde debe estar y buen cuerpo, perfecta para lo que gustes',
    'https://1.bp.blogspot.com/-Jxwdu1gRUUs/Uo6Nm1G0hnI/AAAAAAAAE5g/rLEWQVGRmcA/s1600/a+(3).jpg',
    'no virgen',
    23,
    'Perfecta',
    250);

insert into protitute (name, descripcion, url, status, age, punctuation, worth) values (
    'Sofía', 
    'una chica que esta mas o menitos osea yo no fuzgo.',
    'https://1.bp.blogspot.com/-Jxwdu1gRUUs/Uo6Nm1G0hnI/AAAAAAAAE5g/rLEWQVGRmcA/s1600/a+(3).jpg',
    'virgen',
    38,
    'No hay puntuacion...',
    50);

insert into protitute (name, descripcion, url, status, age, punctuation, worth) values (
    'Charlie', 
    'esta chica tiene de todo! buen cuerpo, buenos melones y tiene sorpresa ;v',
    'https://i.pinimg.com/originals/f1/d3/03/f1d3033ac56fec0a207ed2671812db83.jpg',
    'no virgen',
    26,
    'Exelente',
    500);

insert into protitute (name, descripcion, url, status, age, punctuation, worth) values (
    'Sakura', 
    'esta pequeña niña es muy..... por que hay una loli aqui?, es legal para empezar?',
    'https://i.pinimg.com/originals/59/ed/29/59ed29997b3411ced0daecd6fe1aceaf.png',
    'Virgen o eso espero...',
    '???',
    'Not Function',
    1000);

insert into protitute (name, descripcion, url, status, age, punctuation, worth) values (
    'Brayan', 
    'Un chico con mas huecos que cartuchera de colegio.',
    'https://cdn.discordapp.com/attachments/466035511451189268/1112788038888726538/IMG_20221203_134535278.jpg',
    'Destrozado',
    19,
    'No dura nada',
    -10);
