import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(45deg, #030007, #14051A)",
        backdropFilter: "blur(30px)",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.4)",
      }}
    >
      <LinkedInIcon
        style={{ color: "white", cursor: "pointer" }}
        onClick={() =>
          window.open("https://www.linkedin.com/in/abhish-mazumder/", "_blank")
        }
      />
    </div>
  );
};

export default Footer;
