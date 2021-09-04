const ContactUs = () => {
    const [issending, setissending] = useState(false);
  
  
    const [toSend, setToSend] = useState({
      name: "",
      email: "",
      message: "",
      subject: "",
    });
  
    const onSubmit = (e) => {
      if (toSend) {
        setissending(true);
  
        e.preventDefault();
        send(
          "Hakra3310",
          "template_h2kgvra",
          toSend,
          "user_LbohKGc8bJYMkprBiv2S2"
        )
          .then((response) => {
            console.log("SUCCESS!", response.status, response.text);
            alert(
              "SUCCESS! Message has been sent successfully",
              response.status,
              response.text
            );
            setissending(false);
          })
          .catch((err) => {
            console.log("FAILED, Message not sent, Try again.", err);
            alert("FAILED...", err);
            setissending(false);
          });
      }
    };
    const handleChange = (e) => {
      setToSend({ ...toSend, [e.target.name]: e.target.value });
    };
    
  