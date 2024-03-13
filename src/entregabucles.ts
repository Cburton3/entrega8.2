type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];

// 1a)
let pacientesPediatria: Pacientes[] = [];

const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      pacientesPediatria[pacientesPediatria.length] = pacientes[i];
    }
  }
  return pacientesPediatria;
};
console.log(obtenPacientesAsignadosAPediatria(pacientes));

//1b)
let pacientesPediatriaYMenorA10: Pacientes[] = [];

const obtenPacientesAsignadosAPediatriaYMenorA10 = (
  pacientes: Pacientes[]
): Pacientes[] => {
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra" && pacientes[i].edad < 10) {
      pacientesPediatriaYMenorA10[pacientesPediatriaYMenorA10.length] =
        pacientes[i];
    }
  }
  return pacientesPediatriaYMenorA10;
};

console.log(obtenPacientesAsignadosAPediatriaYMenorA10(pacientes));

// 2)

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProctolo = false;
  for (let i = 0; i < pacientes.length; i++) {
    if (
      pacientes[i].frecuenciaCardiaca > 100 &&
      pacientes[i].temperatura > 39
    ) {
      activarProctolo = true;
    }
  }

  console.log(activarProctolo);
  return activarProctolo;
};

activarProtocoloUrgencia(pacientes);

//Q3)
const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      pacientes[i].especialidad = "Medico de familia"; //cant put 3= here as that equality not reassigment
    }
  }
  return pacientes;
};

console.log(reasignaPacientesAMedicoFamilia(pacientes));

//Q4)

const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  let PacientesDePediatria = false;
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      PacientesDePediatria = true;
    }
  }
  return PacientesDePediatria;
};

console.log(HayPacientesDePediatria(pacientes));

//Q5)

const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  const numeroPacientesPorEspecialidad: NumeroPacientesPorEspecialidad = {
    medicoDeFamilia: 0,
    pediatria: 0,
    cardiologia: 0,
  };
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Medico de familia") {
      numeroPacientesPorEspecialidad.medicoDeFamilia++;
    }
    if (pacientes[i].especialidad === "Pediatra") {
      numeroPacientesPorEspecialidad.pediatria++;
    }
    if (pacientes[i].especialidad === "Cardiólogo") {
      numeroPacientesPorEspecialidad.cardiologia++;
    }
  }
  return numeroPacientesPorEspecialidad;
};
console.log(cuentaPacientesPorEspecialidad(pacientes));
