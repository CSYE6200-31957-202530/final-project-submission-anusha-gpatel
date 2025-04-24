import { CssVarsProvider } from "@mui/joy/styles";
import { useState, useContext } from "react";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";
import axios from "axios";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(faEye);
  const [isUserRegistered, setIsUserRegistered] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    
    if (!email.endsWith("@northeastern.edu")) {
      toast.error("Email must be from @northeastern.edu domain");
      return;
    }

    try {
      const { data } = await axios.post(
        "http://localhost:8080/api/users",
        { name, phone, email, role, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      
      toast.success("Registration successful! Redirecting...", {
        duration: 3000,
        style: {
          background: '#4BB543',
          color: '#fff',
        },
      });
      
      setName("");
      setEmail("");
      setPassword("");
      setPhone("");
      setRole("");
      
      setTimeout(() => {
        navigate("/login"); 
      }, 2000);
      
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message || "Registration failed");
      } else if (error.request) {
        toast.error("No response from server. Please try again later.");
      } else {
        toast.error("An unexpected error occurred");
      }
    }
  };
  
  const handleToggle = () => {
    if (type === "password") {
      setIcon(faEye);
      setType("text");
    } else {
      setIcon(faEyeSlash);
      setType("password");
    }
  };

  

  return (
    <>
      <img className="jpg" src="login.jpg" alt="" />
      <CssVarsProvider>
          <Sheet
            sx={{
              width: 300,
              mx: "auto",
              my: 1,
              py: 3,
              px: 2,
              display: "flex",
              flexDirection: "column",
              gap: 2,
              borderRadius: "sm",
              boxShadow: "md",
            }}
            variant="outlined"
          >
            <div>
              <Typography level="h4" component="h1">
                <b>Welcome!</b>
              </Typography>
              <Typography level="body2">Sign up to continue.</Typography>
            </div>
            {/* <FormControl>
              <FormLabel>Role</FormLabel>
              <Select
                value={role}
                onChange={(e, newValue) => setRole(newValue)}
                required
              >
                <Option value="">Select Role</Option>
                <Option value="Employer">Employer</Option>
                <Option value="Job Seeker">Job Seeker</Option>
              </Select>
            </FormControl> */}
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                type="text"
                name="email"
                placeholder="Email (must be @northeastern.edu)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel>Username</FormLabel>
              <Input
                type="text"
                name="username"
                placeholder="Username"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel>Phone</FormLabel>
              <Input
                type="number"
                name="phone"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                type={type}
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {/* <FontAwesomeIcon
                className="eye"
                onClick={handleToggle}
                icon={icon}
              /> */}
            </FormControl>
            <Button
              type="submit"
              onClick={handleRegister}
              sx={{ mt: 1 }}
              fullWidth
            >
              Register
            </Button>
            
            {/* {isUserRegistered && (
              <Typography 
                level="body2" 
                color="success"
                sx={{ textAlign: 'center' }}
              >
                User successfully registered!
              </Typography>
            )} */}
            
            <Typography
              endDecorator={<Link href="/login">Login</Link>}
              fontSize="sm"
              sx={{ alignSelf: "center" }}
            >
              Already have an account?
            </Typography>
          </Sheet>
      </CssVarsProvider>
    </>
  );
}
export default Register;