/**
 * ============================================================
 *  MASTER BIODATA CONFIG — Edit ONLY this file
 *  All changes here will automatically reflect on the website
 * ============================================================
 */

/*
 * HOW TO ADD PHOTOS TO THE GALLERY:
 * 1. Drop your images inside the  Images/  folder
 * 2. Add the filename to the photos array below
 * Example: photos: ['Images/photo1.jpg', 'Images/photo2.jpg']
 */

const CONFIG = {

  /* ── PHOTO GALLERY ────────────────────────────────────── */
  // Add filenames from your Images/ folder here
  photos: [
    'Images/1.jpg',   // left side image
    'profile.jpg',    // CENTER — this opens first when profile is clicked
    'Images/2.jpg',   // right side image
  ],

  /* ── HERO ─────────────────────────────────────────────── */
  name: "Dabhi Tisha Pravinbhai",
  nameGujarati: "ડાભી ટીશા પ્રવિણભાઈ",

  /* ── QUICK STATS ──────────────────────────────────────── */
  dob: "2003-10-11",   // e.g. "1998-06-15"  — age auto-calculates
  height: "5'2\"",
  weight: "42",           // in kg
  jobExperience: "1",           // e.g. "3+" shown as "3+ yrs"

  /* ── PERSONAL DETAILS ─────────────────────────────────── */
  bloodGroup: "O+",
  nativeVillage: "Ahmedabad, Gujarat",
  currentCity: "Ahmedabad, Gujarat",
  religion: "Hindu",
  casteDetail: "Vankar",

  /* ── FAMILY — PATERNAL ────────────────────────────────── */
  fatherName: "Pravinbhai Bavjibhai Dabhi",
  motherName: "Hemlataben Dabhi",
  fatherOccupation: "AMTS Workshop",
  fatherVillage: "Ahmedabad, Gujarat",

  /**
   * SIBLINGS — add as many objects as needed
   * type: "brother" | "sister"
   * maritalStatus: "Married" | "Unmarried"
   * For Married: add spouseName, spouseJob, spouseCompany
   * For Unemployed: set job: "Unemployed"
   */
  siblings: [
    {
      type: "sister",
      name: "Dharvi Revar",
      maritalStatus: "Married",
      spouseName: "Niraj Revar",
      spouseJob: "",
      spouseCompany: "",
      job: "Unemployed",
    },
    {
      type: "sister",
      name: "Divya Singhal",
      maritalStatus: "Married",
      spouseName: "Niral Singhal",
      spouseJob: "",
      spouseCompany: "",
      job: "Unemployed",
    }, {
      type: "brother",
      name: "Parth Dabhi",
      maritalStatus: "Unmarried",
      job: "Unemployed",
    }
  ],

  /* ── FAMILY — MATERNAL ────────────────────────────────── */
  nanaName: "Premjibhai Parmar",
  naniName: "Hariben Parmar",
  mamaName: "Jayantibhai Parmar",
  mamaVillage: "Chavand, Gujarat",
  mamaOccupation: "Small Business",

  /* ── EDUCATION ────────────────────────────────────────── */
  degree: "B.Com.",
  college: "PD pandya mahila commerce college",
  yearOfPassing: "2024",
  percentage: "5.76 CGPA",
  languages: "Gujarati • Hindi • English",

  /* ── CAREER ─────────────────────────────────────────────── */
  /**
   * Add jobs in order — latest first
   * Set isCurrent: true for current job (shows salary tag + "Currently Working")
   * startDate / endDate format: "Mon YYYY"  e.g. "Aug 2022"
   * For current job, leave endDate blank or omit it entirely
   */
  jobs: [
    {
      title: "Senior Analyst",
      company: "E.Y. GDS",
      city: "Pune, Maharastra",
      startDate: "Apr 2026",      // e.g. "Aug 2024"
      description: "Working as PowerPlatform developer and moving towards GenAI And AgenticAI to enhance the skills and be future ready",
      ctc: "₹11 LPA",
      isCurrent: true,
    }
  ],

  /* ── HOBBIES ──────────────────────────────────────────── */
  hobbies: [
    { emoji: "📚", label: "Reading" },
    { emoji: "✈️", label: "Travelling" },
    { emoji: "🎵", label: "Music" },
    { emoji: "💻", label: "Tech" },
    { emoji: "🏋️", label: "Fitness" },
    { emoji: "🎬", label: "Movies" },
  ],

  /* ── LIFESTYLE ────────────────────────────────────────── */
  smoking: "No",
  drinking: "No",

  /* ── CONTACT ──────────────────────────────────────────── */
  whatsappNumber: "919824876959",   // no + or spaces, e.g. "919876543210"
  phoneDisplay: "+91 98248 76959",
  email: "parmar.arvind93@gmail.com",
  fatherPhone: "+91 9824876959",
  contactCity: "Ahmedabad, Gujarat",

};
