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
  pacientesPediatria = pacientes.filter(
    (paciente) => paciente.especialidad === "Pediatra"
  );
  return pacientesPediatria;
};

obtenPacientesAsignadosAPediatria(pacientes);
console.log(pacientesPediatria);

//1b)
let pacientesPediatriaYMenorA10: Pacientes[] = [];

const obtenPacientesAsignadosAPediatriaYMenorA10 = (
  pacientes: Pacientes[]
): Pacientes[] => {
  pacientesPediatriaYMenorA10 = pacientes.filter(
    (paciente) => paciente.especialidad === "Pediatra" && paciente.edad < 10
  );
  return pacientesPediatriaYMenorA10;
};

console.log(obtenPacientesAsignadosAPediatriaYMenorA10(pacientes));

// // 2)

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProtocolo = false;
  const criticalPatients = pacientes.some(
    (paciente) => paciente.frecuenciaCardiaca > 100 && paciente.temperatura > 39
  );
  if (criticalPatients) {
    activarProtocolo = true;
  }

  return activarProtocolo;
};

console.log(activarProtocoloUrgencia(pacientes));

//Q3)
let transformedPacientes: Pacientes[] = [];
const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  transformedPacientes = pacientes.map((paciente) => ({
    ...paciente,
    especialidad:
      paciente.especialidad === "Pediatra"
        ? "Medico de familia"
        : paciente.especialidad,
  }));

  return transformedPacientes;
};

console.log(reasignaPacientesAMedicoFamilia(pacientes));

// //Q4)

const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  let PacientesDePediatria = false;
  if (pacientes.some((paciente) => paciente.especialidad === "Pediatra")) {
    PacientesDePediatria = true;
    console.error("No se puede la pediatra a casa");
  } else {
    console.log("Se puede mandar la Pediatra a casa");
  }

  return PacientesDePediatria;
};

console.log(HayPacientesDePediatria(pacientes));

// //Q5)

const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  const numeroPacientesPorEspecialidad: NumeroPacientesPorEspecialidad = {
    medicoDeFamilia: 0,
    pediatria: 0,
    cardiologia: 0,
  };

  pacientes.forEach((paciente) => {
    if (paciente.especialidad === "Medico de familia") {
      numeroPacientesPorEspecialidad.medicoDeFamilia++;
    }
    if (paciente.especialidad === "Pediatra") {
      numeroPacientesPorEspecialidad.pediatria++;
    }
    if (paciente.especialidad === "Cardiólogo") {
      numeroPacientesPorEspecialidad.cardiologia++;
    }
  });

  return numeroPacientesPorEspecialidad;
};
console.log(cuentaPacientesPorEspecialidad(pacientes));
