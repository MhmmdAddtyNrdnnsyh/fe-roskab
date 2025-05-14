export interface JobSie {
  id: string;
  namaSie: string;
  tugasSie: string;
  ketuaid: string;
  anggotaid: string[];
}

export const dataJobsie: JobSie[] = [
  {
    id: "sie1",
    namaSie: "Sie Kajian",
    tugasSie: "",
    ketuaid: "ksk",
    anggotaid: ["ask1", "ask2", "ask3", "ask4", "ask5"],
  },
  {
    id: "sie2",
    namaSie: "Sie Sosial",
    tugasSie: "",
    ketuaid: "kss",
    anggotaid: ["ass1", "ass2", "ass3", "ass4", "ass5"],
  },
  {
    id: "sie3",
    namaSie: "Sie Kewirausahaan",
    tugasSie: "",
    ketuaid: "kskw",
    anggotaid: ["askw1", "askw2", "askw3", "askw4", "askw5"],
  },
  {
    id: "sie4",
    namaSie: "Sie Pelatihan",
    tugasSie: "",
    ketuaid: "ksp",
    anggotaid: ["asp1", "asp2", "asp3", "asp4", "asp5"],
  },
  {
    id: "sie5",
    namaSie: "Sie Humas & Jurnalistik",
    tugasSie: "",
    ketuaid: "kshj",
    anggotaid: ["ashj1", "ashj2", "ashj3", "ashj4", "ashj5"],
  },
];

function Sie (){
  return (
    <> 
    <div>
          {dataJobsie.map((jobSie) => (
            <div key={jobSie.id}>
              {jobSie.namaSie}
            </div>
          ))}
        </div>
    </>
  )
}

export default Sie;