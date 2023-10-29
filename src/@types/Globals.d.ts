declare module "*.module.css";
declare module "*.module.scss";
declare module "*.png" {
  const value: any;
  export default value;
}
declare module "*.svg";
declare module "*.jpeg";
declare module "*.jpg";
declare module "*.svg?url";
declare module '@ckeditor/ckeditor5-build-classic' {
  const ClassicEditorBuild: any;

  export = ClassicEditorBuild;
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    custom: true;
    white:true
  }
}