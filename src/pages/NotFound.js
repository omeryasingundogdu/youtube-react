import React from 'react';
import { Container, Title, Text, Button, Group } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  return (
    <Container py={80}>
      <div style={{ textAlign: 'center' }}>
        <Title fw={900} fz={34} mb="md">404</Title>
        <Title fw={900} fz={34} mb="md">Sayfa Bulunamadı</Title>
        <Text c="dimmed" size="lg" ta="center" mx="auto" mt="xl" mb="xl" maw={500}>
          Aradığınız sayfa mevcut değil. URL'yi yanlış yazmış olabilirsiniz veya sayfa taşınmış olabilir.
        </Text>
        <Group justify="center">
          <Button variant="subtle" size="md" onClick={() => navigate('/')}>
            Ana Sayfaya Dön
          </Button>
        </Group>
      </div>
    </Container>
  );
}

export default NotFound; 