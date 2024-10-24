import React, { useContext } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { DataContext } from "../context/DataContext"; 

export default function SectionBlog() {
  const { data } = useContext(DataContext); 

  // Verificación para asegurarnos de que los datos están disponibles antes de acceder a ellos
  if (!data || !data.body) {
    return <Typography variant="h6">Loading...</Typography>; // Mensaje de carga mientras se obtienen los datos
  }

  const cards = Object.values(data.body.posts); // Cambiado de posts a cards

  return (
    <Box 
      sx={{
        backgroundColor: "violet",
        padding: "64px 16px", // Reducido para mobile y tablet
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // Centra el contenido horizontalmente
        justifyContent: "center", // Centra el contenido verticalmente
        height: { xs: 'auto', md: '998px' }, // Altura fija en tablets y pantallas más grandes
        overflow: 'hidden', // Evita desbordamientos
      }}
    >
      {/* Título */}
      <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '20px' }}>
        {data.body.title}
      </Typography>

      {/* Contenedor de tarjetas con Flexbox */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap', // Permite que las tarjetas se ajusten en varias filas si es necesario
          justifyContent: 'center', // Centra las tarjetas horizontalmente
          gap: '20px', // Espaciado entre tarjetas
          maxWidth: '1200px', // Limita el ancho máximo del contenedor para evitar desbordamiento
          width: '100%', // Asegura que el contenedor no se desborde
          margin: '0 auto', // Centra el contenedor horizontalmente
        }}
      >
        {cards.map((card, index) => (
          <Box
            key={index}
            sx={{
              width: { xs: '345px', md: '276px' }, // Ancho fijo para mobile (345px) y desktop (276px)
              height: { xs: '356px', md: '486px' }, // Altura fija para mobile (356px) y desktop (486px)
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: 3,
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              boxSizing: 'border-box', // Asegura que el padding y el borde estén incluidos en el ancho/alto total
            }}
          >
            {/* Imagen con etiqueta de tipo */}
            <Box
              component="img"
              src={card.image}
              alt={card.title}
              sx={{
                width: '100%',
                height: '60%', // La imagen ocupa el 60% de la tarjeta
                objectFit: 'cover',
              }}
            />
            <Typography
              sx={{
                position: 'absolute',
                top: '10px',
                left: '10px',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: 'white',
                padding: '4px 8px',
                fontSize: '12px',
                borderRadius: '4px',
              }}
            >
              {card.type}
            </Typography>

            {/* Contenido debajo de la imagen */}
            <Box sx={{ padding: '10px', display: 'flex', flexDirection: 'column' }}>
              {/* Fecha y Tipo */}
              <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                <Typography sx={{ fontSize: '12px', color: 'gray' }}>
                  {card.date}
                </Typography>
                <Box
                  sx={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: 'green',
                    margin: '0 8px',
                  }}
                />
                <Typography sx={{ fontSize: '12px', color: 'gray' }}>
                  {card.type}
                </Typography>
              </Box>

              {/* Título */}
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                {card.title}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Botón centralizado */}
      <Box sx={{ textAlign: 'center', marginTop: '30px' }}>
        <Button
          variant="contained"
          href={data.body.button_link}
          sx={{
            backgroundColor: 'green',
            color: 'white',
            padding: '8px 20px',
            textTransform: 'none',
          }}
        >
          {data.body.button_label}
        </Button>
      </Box>
    </Box>
  );
}
