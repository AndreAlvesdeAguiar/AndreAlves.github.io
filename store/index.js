import { v4 as uuidv4 } from "uuid";
import { createStore } from "vuex";
import { aboutMeTools } from "./aboutMeTools.js";

const state = () => ({
  projectsHeading: "Projects Portfolio",
  projectsDescription: "Some of the projects I have successfully completed",
  projects: [],
  aboutMe: [
    {
      id: uuidv4(),
      bio: "about.text1",
    },
    {
      id: uuidv4(),
      bio: "about.text2",
    },
    {
      id: uuidv4(),
      bio: "about.text3",
    },
    {
      id: uuidv4(),
      bio: "about.text4",
    },
  ],
  aboutMeTools,
  copyrightDate: new Date().getFullYear(),
  socialProfiles: [
    {
      id: uuidv4(),
      name: "GitHub",
      icon: "github",
      url: "https://github.com/AndreAlvesdeAguiar",
    },
    {
      id: uuidv4(),
      name: "Linkedin",
      icon: "linkedin",
      url: "https://www.linkedin.com/in/andre-alves-de-aguiar/",
    }
  ],
  categories: [],
});

const getters = {
  getProjectById: (state) => (id) => {
    return state.projects.find((project) => project.id === id);
  },
};

const mutations = {
  // @todo
};

const actions = {
  // @todo
};

export default createStore({
  state,
  mutations,
  actions,
  getters,
});
