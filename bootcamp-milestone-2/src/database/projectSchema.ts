import mongoose, { Schema, Model } from "mongoose";


type Project = {
  title: string;
  description: string;
  image: string;
  repository?: string; 
}

const ProjectSchema = new Schema<Project>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  repository: { type: String },
});

const Blog = mongoose.models['Project'] || mongoose.model("Project", ProjectSchema);


export default Project;
