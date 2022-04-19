import React, { useState } from "react";

// supabase
import { supabase } from "../supabaseClient";

// React Router
import { useNavigate, Link } from "react-router-dom";

// Material UI
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";

function Signup() {
  let navigate = useNavigate();

  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [no_telepon, setNo_telepon] = useState("");
  const [password, setPassword] = useState("");

  const onSignup = async () => {
    const { user, session, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    console.log(user);
    navigate("/");
    storeDataUser(user);
  };

  const storeDataUser = async (user) => {
    const { data, error } = await supabase.from("user").insert([
      {
        email: email,
        nama: nama,
        no_telepon: no_telepon,
        user_id: user.id,
      },
    ]);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box 
        sx={{
          marginTop: 18,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
        <Card sx={{ maxWidth: 250, p: 5 }}>
          <h1>Sign Up</h1>

          <TextField
            id="nama"
            label="Nama"
            variant="standard"
            sx={{ mt: 0 }}
            onChange={(e) => setNama(e.target.value)}
          />

          <TextField
            id="no_telepon"
            label="No Telepon"
            variant="standard"
            sx={{ mt: 2 }}
            onChange={(e) => setNo_telepon(e.target.value)}
          />

          <TextField
            id="email"
            label="Email"
            variant="standard"
            sx={{ mt: 2 }}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            id="password"
            label="Password"
            variant="standard"
            sx={{ mt: 2 }}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button variant="contained" sx={{ mt: 2, mr: 3 }} onClick={() => onSignup()}>
            Signup
          </Button>
          <Link to="/" style={{textDecoration: 'none'}}>
            <Button variant="outlined" sx={{ mt: 2 }}>
              Cancel
            </Button>
          </Link>
        </Card>
      </Box>
    </div>
  );
}

export default Signup;
