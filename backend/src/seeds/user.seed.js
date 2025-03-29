import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
  // Female Users
  {
    email: "yossi.putri@example.com",
    fullName: "Yossi",
    password: "12345678",
    profilePict: "https://i.pravatar.cc/150?img=11",
  },
  {
    email: "olivia.sari@example.com",
    fullName: "Olivia Sari",
    password: "12345678",
    profilePict: "https://i.pravatar.cc/150?img=12",
  },
  {
    email: "lina.susanti@example.com",
    fullName: "Lina Susanti",
    password: "12345678",
    profilePict: "https://i.pravatar.cc/150?img=13",
  },
  {
    email: "dewi.anggraini@example.com",
    fullName: "Dewi Anggraini",
    password: "12345678",
    profilePict: "https://i.pravatar.cc/150?img=14",
  },
  {
    email: "siti.nurhaliza@example.com",
    fullName: "Siti Nurhaliza",
    password: "12345678",
    profilePict: "https://i.pravatar.cc/150?img=15",
  },
  {
    email: "ratna.dewi@example.com",
    fullName: "Ratna Dewi",
    password: "12345678",
    profilePict: "https://i.pravatar.cc/150?img=16",
  },
  {
    email: "anita.febrianti@example.com",
    fullName: "Anita Febrianti",
    password: "12345678",
    profilePict: "https://i.pravatar.cc/150?img=17",
  },
  {
    email: "ayu.pratiwi@example.com",
    fullName: "Ayu Pratiwi",
    password: "12345678",
    profilePict: "https://i.pravatar.cc/150?img=18",
  },
  {
    email: "melisa.hartini@example.com",
    fullName: "Melisa Hartini",
    password: "12345678",
    profilePict: "https://i.pravatar.cc/150?img=19",
  },
  {
    email: "tari.wulandari@example.com",
    fullName: "Tari Wulandari",
    password: "12345678",
    profilePict: "https://i.pravatar.cc/150?img=20",
  },
  {
    email: "nina.rosita@example.com",
    fullName: "Nina Rosita",
    password: "12345678",
    profilePict: "https://i.pravatar.cc/150?img=21",
  },
  {
    email: "fitri.rahmawati@example.com",
    fullName: "Fitri Rahmawati",
    password: "12345678",
    profilePict: "https://i.pravatar.cc/150?img=22",
  },
  {
    email: "sri.handayani@example.com",
    fullName: "Sri Handayani",
    password: "12345678",
    profilePict: "https://i.pravatar.cc/150?img=23",
  },
  {
    email: "eka.astuti@example.com",
    fullName: "Eka Astuti",
    password: "12345678",
    profilePict: "https://i.pravatar.cc/150?img=24",
  },
  {
    email: "laras.maharani@example.com",
    fullName: "Laras Maharani",
    password: "12345678",
    profilePict: "https://i.pravatar.cc/150?img=25",
  },
  {
    email: "indah.permata@example.com",
    fullName: "Indah Permata",
    password: "12345678",
    profilePict: "https://i.pravatar.cc/150?img=26",
  },
  {
    email: "nanda.putri@example.com",
    fullName: "Nanda Putri",
    password: "12345678",
    profilePict: "https://i.pravatar.cc/150?img=27",
  },
  {
    email: "desi.rahayu@example.com",
    fullName: "Desi Rahayu",
    password: "12345678",
    profilePict: "https://i.pravatar.cc/150?img=28",
  },
  {
    email: "rina.nuraini@example.com",
    fullName: "Rina Nuraini",
    password: "12345678",
    profilePict: "https://i.pravatar.cc/150?img=29",
  },

  // Male Users
  {
    email: "andi.firman@example.com",
    fullName: "Andi Firman",
    password: "12345678",
    profilePict: "https://i.pravatar.cc/150?img=30",
  },
  {
    email: "budi.santoso@example.com",
    fullName: "Budi Santoso",
    password: "12345678",
    profilePict: "https://i.pravatar.cc/150?img=31",
  },
  {
    email: "eko.prasetyo@example.com",
    fullName: "Eko Prasetyo",
    password: "12345678",
    profilePict: "https://i.pravatar.cc/150?img=32",
  },
  {
    email: "fahmi.ramadhan@example.com",
    fullName: "Fahmi Ramadhan",
    password: "12345678",
    profilePict: "https://i.pravatar.cc/150?img=33",
  },
  {
    email: "joko@example.com",
    fullName: "Joko",
    password: "12345678",
    profilePict: "https://i.pravatar.cc/150?img=34",
  },
  {
    email: "reza.alamsyah@example.com",
    fullName: "Reza Alamsyah",
    password: "12345678",
    profilePict: "https://i.pravatar.cc/150?img=35",
  },
  {
    email: "daniel.suryanto@example.com",
    fullName: "Daniel Suryanto",
    password: "12345678",
    profilePict: "https://i.pravatar.cc/150?img=36",
  },
  {
    email: "fajar.maulana@example.com",
    fullName: "Fajar Maulana",
    password: "12345678",
    profilePict: "https://i.pravatar.cc/150?img=37",
  },
  {
    email: "agus.hermawan@example.com",
    fullName: "Agus Hermawan",
    password: "12345678",
    profilePict: "https://i.pravatar.cc/150?img=38",
  },
  {
    email: "ridho.setiawan@example.com",
    fullName: "Ridho Setiawan",
    password: "12345678",
    profilePict: "https://i.pravatar.cc/150?img=39",
  },
  {
    email: "muhammad.irfan@example.com",
    fullName: "Muhammad Irfan",
    password: "12345678",
    profilePict: "https://i.pravatar.cc/150?img=40",
  },
  {
    email: "bayu.trianto@example.com",
    fullName: "Bayu Trianto",
    password: "12345678",
    profilePict: "https://i.pravatar.cc/150?img=41",
  },
  {
    email: "rahmat.hidayat@example.com",
    fullName: "Rahmat Hidayat",
    password: "12345678",
    profilePict: "https://i.pravatar.cc/150?img=42",
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();
