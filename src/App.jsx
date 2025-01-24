import React from "react";
import Appbar from "./Appbar";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
  Avatar,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CountUp from "react-countup";
import { Phone, Email, LinkedIn, Facebook, Instagram, ImportExport } from "@mui/icons-material";

function App() {
  const news = [
    {
      date: "12 Nov",
      image: "https://th.bing.com/th/id/OIP.d-9a1QjSHmxUkTgFkjnzGgHaE8?rs=1&pid=ImgDetMain", // Replace with the actual image URL
      category: "CLEANING",
      title: "Temporary Ruling Issued",
      description: "Washla has met the demands of a growing world cleaning tremendous.",
      author: { name: "Martha Smith", role: "Washla CEO", avatar: "https://via.placeholder.com/50" },
    },
    {
      date: "11 Nov",
      image: "https://th.bing.com/th/id/OIP.IrUBHhdMo6wWLFueKNreRwHaHa?rs=1&pid=ImgDetMain", // Replace with the actual image URL
      category: "CLEANING",
      title: "The Expands California",
      description: "Welcomed and every sed ut perspiciatis unde omnis iste natus.",
      author: { name: "Laura Jones", role: "Accounting", avatar: "https://via.placeholder.com/50" },
    },
    {
      date: "10 Nov",
      image: "https://th.bing.com/th/id/OIP.sOez0JOx_16cnYq5CgFcxwHaHa?w=500&h=500&rs=1&pid=ImgDetMain", // Replace with the actual image URL
      category: "CLEANING",
      title: "Temporary Ruling Issued",
      description: "Washla has met the demands of a growing world. The Cleaning.",
      author: { name: "Matt Ryan", role: "Lawyer", avatar: "https://via.placeholder.com/50" },
    },
  ];
  
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        overflow: "hidden",
      }}
    >
      {/* Floating Contact Section */}
      <Box
        sx={{
          backgroundColor: "#e3f2fd",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px",
          position: "ab",
          top: 0,
          width: "100%",
          height: "100px",
          zIndex: 1200,
          borderBottom: "1px solid #ccc",
        }}
      >
        {/* Contact Info */}
        <Box>
          <Typography
            variant="body2"
            sx={{ display: "inline", marginRight: "15px" }}
          >
            <Phone sx={{ fontSize: 16, marginRight: "5px" }} />
            +1 123-456-7890
          </Typography>
          <Typography
            variant="body2"
            sx={{ display: "inline", marginRight: "15px" }}
          >
            <Email sx={{ fontSize: 16, marginRight: "5px" }} />
            contact@climaestro.com
          </Typography>
        </Box>

        
        <Box>
          <IconButton href="https://www.linkedin.com" target="_blank">
            <LinkedIn sx={{ color: "#0077b5",marginRight: "10px" }} />
          </IconButton>
          <IconButton href="https://www.facebook.com" target="_blank">
            <Facebook sx={{ color: "#1877f2",marginRight: "10px" }} />
          </IconButton>
          <IconButton href="https://www.instagram.com" target="_blank">
            <Instagram sx={{ color: "#e1306c",marginRight: "30px" }} />
          </IconButton>
        </Box>
      </Box>

      
    <Appbar />

{/* Hero Section */}
<Box
  sx={{
    backgroundImage: 'url("https://emiratescleaners.com/wp-content/themes/emiratescleaners/images/cleaner1.png")',
    backgroundSize: "contain", 
    backgroundRepeat: "no-repeat", 
    backgroundPosition: "right 30% bottom 0%", 
    height: "600px",
    bottom: '80px',
    textAlign: "center",
    backgroundColor: "#e3f2fd",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "50px",
    margin: 0,
    position: "relative", 
  }}
>
  <Typography variant="h3" gutterBottom>
    A Tradition of Quality Cleaning
  </Typography>
  <Typography variant="body1" gutterBottom>
    A Cleaner Place is a Safer Place
  </Typography>
  <Button variant="contained" color="primary">
    Contact Us
  </Button>

  {/* Floating Services Section */}
  <Box
    sx={{
     // backgroundColor: "#ffffff",
      //boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Adds shadow for floating effect
      padding: "40px 20px",
      textAlign: "center",
      position: "absolute", 
      top: "580px",
      left: "50%", 
      transform: "translate(-50%, -50%)", 
      zIndex: 10, 
      width: "90%", 
      borderRadius: "10px", 
    }}
  >
    
    <Grid container spacing={4} justifyContent="center">
      {/* Professional Cleaning */}
      <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ textAlign: "center", padding: "20px" }}>
          <Avatar
            sx={{
              backgroundColor: "#2196f3",
              margin: "0 auto 20px",
              width: 60,
              height: 60,
            }}
          >
            ✨
          </Avatar>
          <Typography variant="h6" gutterBottom>
            Professional Cleaning
          </Typography>
          <Typography variant="body2">
            Housekeeping is responsible for maintaining cleanliness and safety
            for your space.
          </Typography>
        </Card>
      </Grid>
      {/* Fast and Efficient */}
      <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ textAlign: "center", padding: "20px" }}>
          <Avatar
            sx={{
              backgroundColor: "#ff9800",
              margin: "0 auto 20px",
              width: 60,
              height: 60,
            }}
          >
            ⚡
          </Avatar>
          <Typography variant="h6" gutterBottom>
            Fast and Efficient
          </Typography>
          <Typography variant="body2">
            Our aim is to keep your house clean efficiently through innovation
            and dedication.
          </Typography>
        </Card>
      </Grid>
      {/* Renew Your Look */}
      <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ textAlign: "center", padding: "20px" }}>
          <Avatar
            sx={{
              backgroundColor: "#4caf50",
              margin: "0 auto 20px",
              width: 60,
              height: 60,
            }}
          >
            🔄
          </Avatar>
          <Typography variant="h6" gutterBottom>
            Renew Your Look
          </Typography>
          <Typography variant="body2">
            Transform your home or office with a refreshed and clean environment
            today.
          </Typography>
        </Card>
      </Grid>
    </Grid>
  </Box>
</Box>
      {/* Hero Section
      <Box
        sx={{
          backgroundColor: "#e3f2fd",
          height: "400px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: 0,
        }}
      >
        <Typography variant="h3" gutterBottom>
          A Tradition of Quality Cleaning
        </Typography>
        <Typography variant="body1" gutterBottom>
          A Cleaner Place is a Safer Place
        </Typography>
        <Button variant="contained" color="primary">
          Contact Us
        </Button>
      </Box> */}

      {/* Services Section */}
      <Box
        sx={{
          backgroundColor: "#ffffff",
          padding: "20px",
          width: "100%",
          marginTop:"7%"
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Our Great Services
        </Typography>
        <Grid container spacing={2}>
          {[
            {
              title: "Home Cleaning",
              image:
                "https://bookdirtbusters.com/wp-content/uploads/2020/11/house-cleaning-tips.jpeg",
            },
            {
              title: "Windows Cleaning",
              image:
                "https://th.bing.com/th/id/OIP.rHdCe4Z_3HwU1QI2RyWxNgHaE8?rs=1&pid=ImgDetMain",
            },
            {
              title: "Office Cleaning",
              image:
                "https://nowitsclean.ca/wp-content/uploads/office-space-cleaning-1.jpg",
            },
          ].map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardMedia
                  sx={{ height: "200px" }}
                  image={service.image}
                  title={service.title}
                />
                <CardContent>
                  <Typography variant="h6">{service.title}</Typography>
                  <Typography variant="body2">
                    High-quality cleaning services for your home and office.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box
  sx={{
    backgroundColor: "#f5f5f5",
    padding: "20px",
    width: "100%",
  }}
>
  <Typography variant="h4" align="center" gutterBottom>
    Meet Our Team
  </Typography>
  <Grid container spacing={2}>
    {[
      { name: "Monica Gordon", role: "House Cleaner", image: "https://th.bing.com/th/id/OIP.lTUm17TcZMkvc8KuXyz2gwHaJQ?w=614&h=768&rs=1&pid=ImgDetMain" },
      { name: "Laura Jones", role: "Cleaner", image: "https://th.bing.com/th/id/OIP.Sr3jm1GMgIGeRqRkZLbMvAHaJQ?w=1000&h=1250&rs=1&pid=ImgDetMain" },
      { name: "Sara Ryan", role: "Office Cleaner", image: "https://th.bing.com/th/id/OIP.Sr3jm1GMgIGeRqRkZLbMvAHaJQ?w=1000&h=1250&rs=1&pid=ImgDetMain" },
    ].map((teamMember, index) => (
      <Grid item xs={12} sm={6} md={4} key={index}>
        <Card sx={{ position: "relative", overflow: "hidden" }}>
        
          <Box
            sx={{
              height: "300px",
              width: "100%",
              backgroundImage: `url(${teamMember.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              borderRadius: "8px 8px 0 0",
            }}
          />

          {/* Floating Name and Role Container */}
          <Box
            sx={{
              position: "absolute",
              bottom: "20px", 
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 1,
              backgroundColor: "rgba(0, 0, 0, 0.7)", 
              color: "#ffffff", 
              padding: "10px 20px",
              borderRadius: "20px",
              textAlign: "center",
              width: "80%",
              boxShadow: "0 8px 12px rgba(0, 0, 0, 0.2)", 
            }}
          >
            <Typography variant="h6" fontWeight="bold">
              {teamMember.name}
            </Typography>
            <Typography variant="body2" color="inherit">
              {teamMember.role}
            </Typography>
          </Box>
        </Card>
      </Grid>
    ))}
  </Grid>
</Box>

   {/* Video Container */}
   <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "400px",
          backgroundImage: `url('https://via.placeholder.com/800x400')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Video Iframe */}
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ"
          title="Background Video"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "none",
            zIndex: -1,
          }}
          allow="autoplay; loop; fullscreen"
        ></iframe>
       
        

        {/* Floating Statistics Section */}
        <Box
          sx={{
            position: "absolute",
            bottom: "-60px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "90%",
            backgroundColor: "#ffffff",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
            padding: "20px",
          }}
        >
             <Grid container spacing={2} justifyContent="center">
            {[
              { number: 385, label: "Happy Customers" },
              { number: 842, label: "Houses Cleaned" },
              { number: 489, label: "Awards Received" },
              { number: 1344, label: "Glass Cleaned" },
            ].map((stat, index) => (
              <Grid item xs={6} sm={3} key={index}>
                <Typography variant="h4" color="primary" align="center">
                  <CountUp
                    start={0}
                    end={stat.number}
                    duration={2} 
                    separator=","
                  />
                </Typography>
                <Typography variant="body2" align="center">
                  {stat.label}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      <Box sx={{ padding: "80px 20px", textAlign: "center", backgroundColor: "#f8f9fa" }}>
      {/* Title */}
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        WHY CHOOSE US
      </Typography>
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        Recent News
      </Typography>
      <Typography variant="body1" color="textSecondary" sx={{ marginBottom: "40px" }}>
        We specialize in intelligent & effective Search and believe in the power of partnerships to grow business.
      </Typography>

      {/* News Cards */}
      <Grid container spacing={4} justifyContent="center">
        {news.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                overflow: "hidden",
                position: "relative",
                
              }}
            >
              {/* Image */}
              <Box
                component="img"
                src={item.image}
                alt={item.title}
                sx={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
              />
              {/* Date */}
              <Box
                sx={{
                  position: "absolute",
                  top: "10px",
                  left: "10px",
                  backgroundColor: "#0288d1",
                  color: "#fff",
                  padding: "5px 10px",
                  borderRadius: "4px",
                  fontWeight: "bold",
                }}
              >
                {item.date}
              </Box>
              {/* Content */}
              <CardContent>
                <Typography variant="caption" color="primary" fontWeight="bold" gutterBottom>
                  {item.category}
                </Typography>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  {item.description}
                </Typography>
                {/* Author */}
                <Box display="flex" alignItems="center" padding="10px 70px" mt={2}>
                  <Avatar src={item.author.avatar} alt={item.author.name} />
                  <Box ml={2}>
                    <Typography variant="body2" fontWeight="bold">
                      {item.author.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {item.author.role}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    <Box
  sx={{
    backgroundColor: "#f5f5f5",
    height: "150px", 
    display: "flex",
    flexDirection: "column", 
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: "0 20px",
  }}
>
  {/* Copyright text */}
  <Box sx={{ marginBottom: 2 }}>
    <Typography variant="body2">
      &copy; 2025 clemaestro Cleaning Services. All rights reserved.
    </Typography>
  </Box>

  {/* Navigation links */}
  <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 2 }}>
    <Typography variant="body2" sx={{ marginBottom: 1 }}>Home</Typography>
    <Typography variant="body2" sx={{ marginBottom: 1 }}>About</Typography>
    <Typography variant="body2" sx={{ marginBottom: 1 }}>Service</Typography>
    <Typography variant="body2" sx={{ marginBottom: 1 }}>Team</Typography>
    <Typography variant="body2" sx={{ marginBottom: 1 }}>Contact</Typography>
  </Box>

  {/* Social media icons */}
  <Box sx={{ display: "flex", gap: 2 }}>
    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
      <img src="/path-to-instagram-logo.svg" alt="Instagram" style={{ width: 24, height: 24 }} />
    </a>
    <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
      <img src="/path-to-x-logo.svg" alt="X" style={{ width: 24, height: 24 }} />
    </a>
    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
      <img src="/path-to-linkedin-logo.svg" alt="LinkedIn" style={{ width: 24, height: 24 }} />
    </a>
    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
      <img src="/path-to-facebook-logo.svg" alt="Facebook" style={{ width: 24, height: 24 }} />
    </a>
  </Box>
</Box>


    </div>
  );
}

export default App;
