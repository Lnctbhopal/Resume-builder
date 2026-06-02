import { createSlice } from "@reduxjs/toolkit";

const savedPersonal = JSON.parse(
  localStorage.getItem("personal")
);

const savedEducation = JSON.parse(
  localStorage.getItem("education")
);

const savedExperience = JSON.parse(
  localStorage.getItem("experience")
);

const savedProjects = JSON.parse(
  localStorage.getItem("projects")
);

const savedSkills = JSON.parse(
  localStorage.getItem("skills")
);

const initialState = {

  personal: savedPersonal || {
    name: "",
    email: "",
    phone: "",
    location: "",
    linkdin: "",
    Github: "",
    summary: "",
  },

  education: savedEducation || [{
    degree: "",
    college: "",
    year: "",
    percentage: "",
    intermediate: "",
    highschool: "",
  }],

  experience: savedExperience || [{
    company: "",
    role: "",
    startDate: "",
    endDate: "",
    location: "",
    techStack: "",
    description: ""
  }],

  projects: savedProjects || [{
    name: "",
    description: "",
    techStack: "",
    link: "",
  }],

  skills: savedSkills || {
    Programming: [],
    fronted: [],
    backned: [],
    database: [],
    tools: [],
    AI: [],
    softSkills: [],
  }

};

const resumeSlice = createSlice({
  name: "resume",
  initialState,

  reducers: {

    setPersonal: (state, action) => {
      state.personal = {
        ...state.personal,
        ...action.payload
      };

      localStorage.setItem(
        "personal",
        JSON.stringify(state.personal)
      );
    },

    addEducation: (state, action) => {
      state.education.push(action.payload);

      localStorage.setItem(
        "education",
        JSON.stringify(state.education)
      );
    },

    removeEducation: (state, action) => {
      state.education.splice(action.payload, 1);

      localStorage.setItem(
        "education",
        JSON.stringify(state.education)
      );
    },

    addExperience: (state, action) => {
      state.experience.push(action.payload);

      localStorage.setItem(
        "experience",
        JSON.stringify(state.experience)
      );
    },

    addProject: (state, action) => {
      state.projects.push(action.payload);

      localStorage.setItem(
        "projects",
        JSON.stringify(state.projects)
      );
    },

    setSkills: (state, action) => {
      state.skills = action.payload;

      localStorage.setItem(
        "skills",
        JSON.stringify(state.skills)
      );
    },

  }
});

export const {
  setPersonal,
  addEducation,
  removeEducation,
  addExperience,
  addProject,
  setSkills,
} = resumeSlice.actions;

export default resumeSlice.reducer;