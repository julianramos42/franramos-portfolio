export type Persona = {
  n: string;
  r: string;
  ig?: string;
  yt?: string;
  foto: string;
};

const f = (slug: string) => `/img/personas/${slug}.jpg`;

export const PERSONAS: Persona[] = [
  { n: "Ahmad Ashrafi", r: "Entrepreneur", ig: "https://www.instagram.com/asapinvests/", yt: "https://www.youtube.com/channel/UCAsiPy9wW8p8aNRAo5kABAw", foto: f("ahmad-ashrafi") },
  { n: "Josue Peña", r: "Emprendedor Digital", ig: "https://www.instagram.com/yojosuepena", yt: "https://www.youtube.com/@soyjosuepena", foto: f("josue-pena") },
  { n: "Daniela Aiello", r: "Digital Growth Strategist", ig: "https://www.instagram.com/danieaiello", foto: f("daniela-aiello") },
  { n: "Rodrigo Arenas", r: "Fundador y CEO de Republica.com", ig: "https://www.instagram.com/lideresconrodrigoarenas", yt: "https://www.youtube.com/@lideresconrodrigoarenas", foto: f("rodrigo-arenas") },
  { n: "Abelardo de la Espriella", r: "Presidente electo de Colombia", ig: "https://www.instagram.com/delaespriella_style", foto: f("abelardo-de-la-espriella") },
  { n: "Luis Lacalle Pou", r: "Expresidente de Uruguay", ig: "https://www.instagram.com/luislacallepou/", foto: f("luis-lacalle-pou") },
  { n: "Jorge Serratos", r: "Empresario", ig: "https://www.instagram.com/jorgeserratosf", foto: f("jorge-serratos") },
  { n: "Alejandro Cardona", r: "Fundador · Seminario Creando Riqueza", ig: "https://www.instagram.com/alejandrocardonascr", foto: f("alejandro-cardona") },
  { n: "Laura Báez", r: 'Autora de "Érase una vez una mentira"', ig: "https://www.instagram.com/thelaurabaez/", foto: f("laura-baez") },
  { n: "Guillermo Rodríguez Navarrete", r: "Doctor", ig: "https://www.instagram.com/nutrillermo", foto: f("guillermo-rodriguez-navarrete") },
  { n: "Joseph Schwarzkopf", r: "Gerente General · Uribe Schwarzkopf", ig: "https://www.instagram.com/josephsst", foto: f("joseph-schwarzkopf") },
  { n: "Tommy Schwarzkopf", r: "Architect", ig: "https://www.instagram.com/stommysch", foto: f("tommy-schwarzkopf") },
  { n: "Rolando Espinal", r: "Experto en IA y Marketing Comercial/Político", ig: "https://www.instagram.com/yo_rolandoespinal", foto: f("rolando-espinal") },
  { n: "Rafa J Conde", r: "Founder · Man of War", ig: "https://www.instagram.com/manofwarr", foto: f("rafa-j-conde") },
  { n: "Rosita Hurtado", r: "Fashion Designer", ig: "https://www.instagram.com/rositahurtadol", foto: f("rosita-hurtado") },
  { n: "Georges Sefair", r: "Mentor en Crecimiento Empresarial", ig: "https://www.instagram.com/drgsefair", foto: f("georges-sefair") },
  { n: "Dariel Fernandez", r: "Miami County Tax Collector", ig: "https://www.instagram.com/darielfernandez", foto: f("dariel-fernandez") },
  { n: "Fer Niizawa", r: "Autor del Best Seller IKIGAI", ig: "https://www.instagram.com/ferniizawa", foto: f("fer-niizawa") },
  { n: "Dra. Klara", r: "Médico · Sexóloga", ig: "https://www.instagram.com/doctoraklarasenior/", yt: "https://www.youtube.com/@tusaludintima", foto: f("dra-klara") },
];
