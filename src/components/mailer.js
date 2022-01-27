import emailjs from "emailjs-com";

const Mailer = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_snbwst9",
        "template_nwvumvl",
        e.target,
        "user_XsWYgoJefInsDKS2FmDnE"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    e.target.reset();
  }
  return (
    <div
      className="container border"
      style={{
        marginTop: "50px",
        width: "50%",
        backgroundImage: `url("https://www.techrepublic.com/a/hub/i/r/2021/02/05/2c503225-0fb7-447f-8f34-facda0dc4472/resize/1200x/cda20270e6cc67f471f748edf15cba0f/smash-3.jpg")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        color: "white",
        fontWeight: "bold",
      }}
    >
      <h1 style={{ marginTop: "25px" }}>Contact Form</h1>
      <form
        className="row"
        style={{ margin: "25px 85px 75px 100px" }}
        onSubmit={sendEmail}
      >
        <label>name</label>
        <input type="text" name="name" className="form-control"></input>

        <label>Email</label>
        <input type="email" name="user_email" className="form-control"></input>

        <label>Message</label>
        <textarea name="message" rows="4" className="form-control"></textarea>
        <input
          type="submit"
          value="send"
          className="form-control btn btn-primary"
          style={{ marginTop: "30px" }}
        ></input>
      </form>
    </div>
  );
};
export default Mailer;
