// All website content lives here. Edit this file to change text; components stay untouched.
// Search for TODO to find what still needs your input.

export type Photo = { src: string; alt: string; position?: string };
export type Item = {
  title: string;
  summary?: string;      // always visible
  body?: string[];       // paragraphs shown when expanded
  facts?: string[];      // bullet list shown when expanded
  photo?: Photo;
};
export type Group = { guide: string; photo?: Photo; items: Item[] };
export type SectionData = { id: string; number: string; title: string; groups: Group[] };

export const profile = {
  name: "Trang Linh Le",
  school: "Thai Nguyen High School for the Gifted, Physics Specialized Class",
  location: "Thai Nguyen Province, Vietnam",
  email: "letranglinh.ling09@gmail.com",
  // TODO: temporary factual line. Replace with the tagline we write together from your stories.
  intro: "Debater, organizer, researcher and MC. Interested in economics and finance.",
};

export const featured = [
  {
    photo: { src: "/images/youth-union.png", alt: "Trang Linh in a Youth Union uniform and delegate badge in front of the congress screen", position: "50% 30%" },
    caption: "Youth Union Delegates' Congress, Thai Nguyen High School for the Gifted, 2026–2027. Class Youth Union Secretary, Physics 12.",
  },
  {
    photo: { src: "/images/debate.png", alt: "Trang Linh speaking at the podium during the Hai Phong Debate Open 2026 final", position: "50% 55%" },
    caption: "Hai Phong Debate Open 2026 final. First-breaking team and champion.",
  },
  {
    photo: { src: "/images/mc.png", alt: "Trang Linh in a cream dress holding a script as MC of Rewind35", position: "50% 30%" },
    caption: "MC of Rewind35, a farewell program for graduating students. About 1,200 attendees.",
  },
];

export const timeline: { year: string; items: string[] }[] = [
  { year: "2022", items: [
    "Head of External Relations, CVA's Cassette (media club)",
    "VISEF: AI object recognition for the visually impaired. 2nd Prize (City), 3rd Prize (Provincial)",
  ]},
  { year: "2023", items: [
    "Vice President, CVA's Cassette. Managed 22 media projects",
    "Executive Committee Member, Youth Union of Chu Van An Secondary School",
    "MC for annual school cultural performances, 1,300 attendees",
    "VISEF: AI helping visually impaired users operate computers. 2nd Prize (City), 4th Prize (Provincial)",
  ]},
  { year: "2024", items: [
    "Honorable Prize, City-level Physics Academic Competition",
    "Entered Thai Nguyen High School for the Gifted",
    "Debate Team Member, CTN Debate Club",
    "Executive Committee Member, Youth Union of Thai Nguyen High School for the Gifted",
    "Deputy Head of Content & External Relations, CTN Young Supporters",
    "Member, CTN Zone (Tet Festival 2025, Rewind34)",
    "Finance & Logistics Team Member, Nắng Media Club",
  ]},
  { year: "2025", items: [
    "Deputy Head of Finance, Thai Nguyen Debate Open. Raised 25 million VND from 15 sponsors",
    "Team Leader, school STEM competition. 1st Prize",
    "Business documentation for Havic, a construction company",
    "President, CTN Debate Club",
    "Founder & Head Organizer, Frosty BP Debate Open, 100 participants",
    "President, CTN Young Supporters",
    "VISEF: Qenera, an exam-preparation platform. 1st Provincial Prize, National round",
    "3rd Place, School Badminton Tournament",
    "MC, Rewind35, 1,200 attendees",
  ]},
  { year: "2026", items: [
    "Head Organizer, Beyond Words debate workshop, 50 middle school students",
    "Class Youth Union Secretary, Physics 12",
    "Advisor to CTN Debate Club, CVA's Cassette and CTN Young Supporters",
  ]},
];

export const sections: SectionData[] = [
  {
    id: "volunteer", number: "01", title: "Volunteer",
    groups: [
      { guide: "I love kids.", items: [
        { title: "Children's Day at Thai Nguyen Central Hospital", summary: "June 1, 2026. Participant." },
        { title: "Green Chung Cake, Tet Reunion with pediatric patients", summary: "2026. Participant, Thai Nguyen Central Hospital." },
        // TODO: add photos (no children's faces) and one moment you remember.
      ]},
      { guide: "I contribute to my community.", items: [
        { title: "Exam-support volunteer campaigns",
          summary: "As President of CTN Young Supporters.",
          facts: ["3 exam-support campaigns", "5 volunteer teams, 100 volunteers", "Tasks: traffic control, school merchandise sales, support for students taking exams"] },
        // TODO: add one specific story.
      ]},
    ],
  },
  {
    id: "debate", number: "02", title: "Debate",
    groups: [
      { guide: "I am a debater.", photo: featured[1].photo, items: [
        { title: "Achievements", facts: [
          // TODO: confirm against your final list (CV counts).
          "Hai Phong Debate Open 2026: first-breaking team, champion",
          "As club president (2025–2026): 9 tournaments, with 1 champion, 1 semi-finalist, 2 quarter-finalists and a 1st reserve breaking",
          "As team member (2024–2025): 10 tournaments, with Top 3 Speakers, 2 semi-finalists and 3 quarter-finalists",
        ]},
      ]},
      { guide: "I inspire others to join debate.", items: [
        { title: "Beyond Words", summary: "Debate workshop for 50 middle school students. Head Organizer, 2026.",
          body: [
            "In my province, there are only three high school debate clubs, and not a single one at the middle school level. I wanted students to meet debate earlier, so I organized Beyond Words.",
            "The hardest part came before the workshop: finding the students. Not everyone is on social media, and many don't yet know there is something worth building this early. I also trained a new core team to plan and run it, and invited speakers.",
          ]},
        { title: "Free Debate Course", summary: "A free course for a high school debate club.",
          body: ["A high school debate club in my province had been inactive for a long time. I taught a free course to help its members rebuild it, and trained the people who would carry it on."]},
      ]},
      { guide: "I create debate activities.", items: [
        { title: "Frosty BP Debate Open", summary: "Founder & Head Organizer, 2025–2026.",
          facts: ["An online pre-Vietnam BP championship for high school and university students", "100 participants aged 16+", "Concept, budget, media, marketing, adjudication panel and training of the running team"] },
        { title: "Thai Nguyen Debate Open", summary: "Deputy Head of Finance, 2025.",
          facts: ["Wrote the sponsorship proposal and invitation letters", "Secured 25 million VND (about US$1,000) from 15 sponsors", "Tracked team KPIs against deadlines"] },
        // TODO: add your own story for each.
      ]},
    ],
  },
  {
    id: "research", number: "03", title: "Science Research",
    groups: [
      { guide: "Qenera", items: [
        { title: "Qenera", summary: "An exam-preparation platform for Vietnam's national high school graduation exam. VISEF 2025, Team Leader.",
          body: [
            "Preparing for Vietnam's national high school graduation exam often means studying without a mentor or a one-on-one teacher, so learning isn't personalized. That was my own experience and what I saw around me.",
            "With one teammate, I built Qenera. I came up with the idea, ran the research, wrote the report, tested the code, wrote a small part of it with AI assistance, tested the product with real users, and led the team.",
          ],
          facts: ["1,000+ trial users, 516 positive responses", "1st Prize, Provincial level; National round participant"],
          // TODO: add what the product does, one design decision, one mistake, photos.
        },
      ]},
      { guide: "Software for visually impaired users", items: [
        { title: "AI object recognition", summary: "VISEF 2022. 2nd Prize (City), 3rd Prize (Provincial)." },
        { title: "AI for operating a computer", summary: "VISEF 2023. 2nd Prize (City), 4th Prize (Provincial)." },
        // TODO: what each product does, your part, photos.
      ]},
    ],
  },
  {
    id: "other", number: "04", title: "Other Activities",
    groups: [
      { guide: "I belong to public and confident.", items: [
        { title: "Master of Ceremony", summary: "Annual cultural performances at Chu Van An Secondary School (2023, 1,300 attendees). Rewind35 (2025, 1,200 attendees).", photo: featured[2].photo },
      ]},
      { guide: "I build my health.", items: [
        { title: "Traditional martial arts", summary: "Team leader. 1st Place, school competition in 2025 and 2026." },
        { title: "Badminton", summary: "3rd Place, women's doubles, school tournament 2025." },
      ]},
      { guide: "I want to connect people and do for public.", items: [
        { title: "Youth Union", summary: "Executive Committee Member at Chu Van An Secondary School and Thai Nguyen High School for the Gifted. Class Youth Union Secretary, Physics 12.", photo: featured[0].photo },
        { title: "CVA's Cassette", summary: "Media club. Head of External Relations, then Vice President (22 media projects), now Advisor." },
        { title: "CTN Zone and Nắng Media Club", summary: "Tet Festival 2025 (raised 10 million VND from 4 sponsors, wrote a 2.5-hour drama script). Rewind34 (raised 5 million VND from 2 sponsors). Finance and logistics for the school magazine." },
        // TODO: photos and a short description for each.
      ]},
    ],
  },
];
