"use client"

import Link from "next/link"
import {
  Container,
  Group,
  Button,
  Text,
  Title,
  Stack,
  SimpleGrid,
  Image,
  Box,
  Card,
  ThemeIcon,
  Badge,
  rem,
  Accordion,
  Avatar,
  Divider,
} from "@mantine/core"
import {
  IconArrowRight,
  IconCheck,
  IconClock,
  IconChartLine,
  IconShieldCheck,
  IconStar,
  IconRobot,
  IconBulb,
  IconUsers,
} from "@tabler/icons-react"
import { Hero3D } from "@/components/landing/hero-3d"
import { AnimatedSection } from "@/components/landing/animated-section"

export default function Home() {
  return (
    <Box style={{ minHeight: '100vh', background: 'transparent', position: 'relative' }}>
      {/* Global 3D Background */}
      <Hero3D />

      {/* Top Banner */}
      <Box
        bg="payfit.6"
        py={10}
        style={{ color: 'white', textAlign: 'center', fontSize: rem(14), fontWeight: 600 }}
      >
        <Container size="lg">
          Offre exclusive : Votre 1er mois offert pour les entreprises de moins de 10 salariés ! {" "}
          <Link href="/onboarding" style={{ color: 'white', textDecoration: 'underline' }}>
            En profiter
          </Link>
        </Container>
      </Box>

      {/* Header */}
      <Box component="header" py="md" style={{ borderBottom: `1px solid rgba(255,255,255,0.3)`, backgroundColor: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(10px)', position: 'sticky', top: 0, zIndex: 100 }}>
        <Container size="lg">
          <Group justify="space-between">
            <Group gap="sm">
              <ThemeIcon size={40} radius="md" color="payfit.6" variant="filled">
                <Text fw={800} size="xl">P</Text>
              </ThemeIcon>
              <Text size="xl" fw={800} c="dark.9" style={{ letterSpacing: '-0.5px' }}>
                PayFit
              </Text>
            </Group>

            <Group gap="xl" visibleFrom="md">
              <Link href="#solutions" style={{ textDecoration: 'none', color: 'var(--mantine-color-gray-7)', fontSize: rem(14), fontWeight: 500 }}>Solutions</Link>
              <Link href="#ia" style={{ textDecoration: 'none', color: 'var(--mantine-color-gray-7)', fontSize: rem(14), fontWeight: 500 }}>IA Assistant</Link>
              <Link href="#tarifs" style={{ textDecoration: 'none', color: 'var(--mantine-color-gray-7)', fontSize: rem(14), fontWeight: 500 }}>Tarifs</Link>
              <Link href="#faq" style={{ textDecoration: 'none', color: 'var(--mantine-color-gray-7)', fontSize: rem(14), fontWeight: 500 }}>Support</Link>
            </Group>

            <Group gap="md">
              <Button component={Link} href="/login" variant="subtle" color="gray" visibleFrom="sm">
                Connexion
              </Button>
              <Button component={Link} href="/onboarding" color="payfit.6" radius="md">
                Essayer maintenant
              </Button>
            </Group>
          </Group>
        </Container>
      </Box>

      {/* Hero Section */}
      <Box component="section" py={120} style={{ position: 'relative', overflow: 'hidden', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        
        {/* Content */}
        <Container size="lg" style={{ position: 'relative', zIndex: 1 }}>
          <Stack align="center" gap="xl" ta="center">
            <AnimatedSection>
              <Badge 
                color="white" 
                variant="light" 
                size="lg" 
                radius="xl" 
                bg="rgba(255,255,255,0.8)" 
                c="payfit.9"
                style={{ backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.5)', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}
              >
                Insight Boost
              </Badge>
            </AnimatedSection>
            
            <AnimatedSection delay={0.1}>
              <Title order={1} size={rem(72)} fw={900} style={{ lineHeight: 1.1, letterSpacing: '-2px' }}>
                Empower Your RH with <br />
                <span style={{ 
                  color: 'var(--mantine-color-payfit-6)',
                  textShadow: '0 0 40px rgba(192,132,252,0.5)'
                }}>Expert Insights</span>
              </Title>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Text size="xl" c="dimmed" lh={1.6} maw={600} mx="auto">
                Unlock your potential with our comprehensive resources, tailored to guide you every step of the way.
              </Text>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <Group gap="md">
                <Button 
                    component={Link} 
                    href="/onboarding" 
                    size="xl" 
                    bg="payfit.6" 
                    c="white" 
                    radius="xl" 
                    px={50}
                    style={{ boxShadow: '0 10px 30px rgba(192,132,252,0.5)' }}
                >
                  Start Now
                </Button>
                
                <Group gap="xs" align="center">
                   <Text fw={900} size={rem(32)} c="dark.8" lh={1}>10</Text>
                   <Box lh={1.2}>
                      <Text size="xs" c="dimmed" fw={700}>YEARS OF</Text>
                      <Text size="xs" c="dimmed">RELIABILITY</Text>
                   </Box>
                </Group>
              </Group>
            </AnimatedSection>
          </Stack>
        </Container>
      </Box>

      {/* Social Proof */}
      <AnimatedSection delay={0.3}>
      <Box py={60} style={{ borderBottom: `1px solid var(--mantine-color-gray-2)` }}>
        <Container size="lg">
          <Text ta="center" size="sm" fw={700} c="dimmed" tt="uppercase" mb="xl" lts={1}>
            Ils automatisent déjà leur paie avec PayFit
          </Text>
          <Group justify="center" gap={60} style={{ opacity: 0.6 }}>
            {["Kaibee", "Vitaline", "Gymlib", "Pilot'in", "Liberkeys", "Heetch"].map((brand) => (
              <Text key={brand} size="xl" fw={900} c="gray.6">{brand}</Text>
            ))}
          </Group>
        </Container>
      </Box>
      </AnimatedSection>

      {/* Feature Section 1 - Glassmorphism */}
      <Box component="section" py={100} id="solutions">
        <Container size="lg">
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing={80} style={{ alignItems: 'center' }}>
            <AnimatedSection>
            <Box style={{ position: 'relative' }}>
               <div style={{
                  position: 'absolute', top: '10%', left: '-10%', width: '80%', height: '80%',
                  background: 'radial-gradient(circle, rgba(168,85,247,0.1) 0%, rgba(255,255,255,0) 70%)',
                  borderRadius: '50%', filter: 'blur(40px)', zIndex: -1
               }} />
              <Image
                src="/landing/dashboard-glass.jpg"
                radius="lg"
                alt="Dashboard view"
                style={{ 
                    boxShadow: '0 20px 50px -10px rgba(0,0,0,0.1)',
                    border: '1px solid rgba(255,255,255,0.5)'
                }}
              />
            </Box>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
            <Stack gap="xl">
              <Title order={2} size={rem(40)} fw={800}>
                Une visibilité totale sur vos coûts salariaux
              </Title>
              <Text size="lg" c="dimmed">
                Grâce à notre interface ultra-moderne, analysez vos distributions de salaires, taxes et cotisations en temps réel. Plus besoin d'attendre la fin du mois.
              </Text>

              <Stack gap="md">
                <FeatureItem
                  icon={IconChartLine}
                  title="Analyses en temps réel"
                  description="Suivez l'évolution de votre masse salariale avec des graphiques interactifs."
                />
                <FeatureItem
                  icon={IconShieldCheck}
                  title="Conformité garantie"
                  description="Mises à jour automatiques selon les dernières évolutions conventionnelles."
                />
              </Stack>
            </Stack>
            </AnimatedSection>
          </SimpleGrid>
        </Container>
      </Box>

      {/* AI Assistant Section */}
      <Box component="section" py={120} id="ia" style={{ background: 'linear-gradient(180deg, var(--mantine-color-blue-0) 0%, #ffffff 100%)' }}>
        <Container size="lg">
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing={80} style={{ alignItems: 'center' }}>
            <AnimatedSection>
            <Stack gap="xl">
              <Group gap="xs">
                <IconRobot size={32} color="var(--mantine-color-blue-6)" />
                <Title order={2} size={rem(40)} fw={800} c="blue.9">
                  L'IA au service de vos RH
                </Title>
              </Group>
              <Text size="lg" c="dimmed">
                Notre assistant IA intelligent répond instantanément aux questions de vos employés sur la politique de vacances, les bulletins de paie et bien plus.
              </Text>

              <Card p="xl" radius="lg" shadow="sm" style={{ backdropFilter: 'blur(10px)', background: 'rgba(255,255,255,0.8)' }}>
                <Stack gap="md">
                  <Badge color="blue">Démonstration</Badge>
                  <Text fw={700}>"Quel est mon solde de congés restants ?"</Text>
                  <Text size="sm" c="gray.7" style={{ fontStyle: 'italic' }}>
                    "Bonjour ! Il vous reste 12 jours de congés payés. Vous pouvez en poser de nouveaux directement dans l'onglet 'Absences'."
                  </Text>
                </Stack>
              </Card>

              <Button size="lg" color="blue.6" radius="md" w="fit-content">
                Découvrir l'Assistant IA
              </Button>
            </Stack>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
            <Box>
              <Image
                src="/landing/ai-bot.jpg"
                radius="lg"
                alt="AI Assistant"
                style={{ 
                    boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)',
                    transform: 'perspective(1000px) rotateY(-5deg) rotateX(2deg)',
                    transition: 'transform 0.3s ease',
                }}
              />
            </Box>
            </AnimatedSection>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Efficiency Section */}
      <Box component="section" py={100}>
        <Container size="lg">
          <AnimatedSection>
          <Box ta="center" mb={60}>
            <Title order={2} size={rem(48)} fw={800} mb="md">
              Plus qu'un logiciel, un moteur de croissance
            </Title>
            <Text size="xl" c="dimmed" style={{ maxWidth: 700 }} mx="auto">
              Nous avons optimisé chaque étape pour vous faire gagner jusqu'à 90% de temps sur votre gestion administrative.
            </Text>
          </Box>
          </AnimatedSection>

          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl">
            <AnimatedSection delay={0.1}>
            <StatsCard
              image="/landing/gears.jpg"
              title="Automatisation Totale"
              description="La DSN, les virements SEPA et les cotisations sont gérés automatiquement."
            />
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
            <StatsCard
              image="/landing/simplicity.jpg"
              title="Simplicité Absolue"
              description="Une prise en main en moins d'une heure, même sans connaissances en paie."
            />
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
            <Card p="xl" radius="lg" shadow="sm" withBorder h="100%" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Stack align="center" ta="center">
                <ThemeIcon size={60} radius="xl" color="payfit.1">
                  <IconBulb size={32} color="var(--mantine-color-payfit-6)" />
                </ThemeIcon>
                <Title order={3}>Intelligence RH</Title>
                <Text c="dimmed">Des insights automatisés pour mieux piloter vos talents et vos recrutements.</Text>
                <Button variant="light" color="payfit.6" mt="md">En savoir plus</Button>
              </Stack>
            </Card>
            </AnimatedSection>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Features Grid */}
      <Box py={100}>
        <Container size="lg">
          <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="xl">
            <AnimatedSection delay={0.1}>
            <FeatureCard
              icon={IconUsers}
              title="Gestion du personnel"
              description="Centralisez toutes les données de vos salariés : contrats, documents, RIB."
            />
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
            <FeatureCard
              icon={IconClock}
              title="Temps et activités"
              description="Suivez les heures travaillées et validez les temps de présence en un clic."
            />
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
            <FeatureCard
              icon={IconArrowRight}
              title="Notes de frais"
              description="Vos employés scannent, vous validez, PayFit calcule et rembourse."
            />
            </AnimatedSection>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Testimonials */}
      <Box py={100} bg="gray.0">
        <Container size="lg">
          <AnimatedSection>
             <Title order={2} ta="center" mb={60}>Ce que disent nos clients</Title>
          </AnimatedSection>
          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl">
            <AnimatedSection delay={0.1}>
            <TestimonialCard
              quote="PayFit a changé ma vie de chef d'entreprise. Je ne passe plus mes dimanches sur la paie."
              author="Sophie Lambert"
              role="CEO - TechStyle"
            />
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
            <TestimonialCard
              quote="L'interface est d'une fluidité incroyable. Nos employés adorent l'assistant IA."
              author="Marc Dubois"
              role="DRH - Global Solutions"
            />
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
            <TestimonialCard
              quote="Le support est réactif et expert. On se sent vraiment accompagné."
              author="Julie Martin"
              role="Office Manager - Creative Studio"
            />
            </AnimatedSection>
          </SimpleGrid>
        </Container>
      </Box>

      {/* FAQ */}
      <Box py={100} id="faq">
        <Container size="sm">
          <AnimatedSection>
          <Title order={2} ta="center" mb={60}>Questions fréquentes</Title>
          <Accordion variant="separated" radius="md">
            <Accordion.Item value="expert">
              <Accordion.Control>Ai-je besoin d'un expert-comptable ?</Accordion.Control>
              <Accordion.Panel>
                Non, PayFit automatise la majorité des tâches complexes. Vous gardez néanmoins la possibilité de donner un accès à votre comptable.
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="tarif">
              <Accordion.Control>Comment fonctionne la tarification ?</Accordion.Control>
              <Accordion.Panel>
                Notre offre est composée d'un abonnement mensuel fixe et d'un coût variable par employé actif sur la plateforme.
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="security">
              <Accordion.Control>Mes données sont-elles sécurisées ?</Accordion.Control>
              <Accordion.Panel>
                Absolument. Nous utilisons un chiffrement de niveau bancaire et nos serveurs sont situés en Europe, en totale conformité avec le RGPD.
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
          </AnimatedSection>
        </Container>
      </Box>

      {/* Final CTA */}
      <Box py={100} style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          width: '800px', height: '600px',
          background: 'radial-gradient(circle, rgba(192,132,252,0.2) 0%, rgba(255,255,255,0) 70%)',
          zIndex: -1, pointerEvents: 'none'
        }} />
        <Container size="lg">
           <AnimatedSection>
          <Card
            radius="xl"
            p={80}
            bg="payfit.7"
            style={{
              color: 'white',
              textAlign: 'center',
              boxShadow: '0 40px 80px rgba(111, 44, 169, 0.4)',
              background: 'linear-gradient(135deg, var(--mantine-color-payfit-8) 0%, var(--mantine-color-payfit-6) 100%)'
            }}
          >
            <Stack align="center" gap="xl">
              <Title order={2} size={rem(48)} fw={900}>
                Prêt à simplifier votre gestion RH ?
              </Title>
              <Text size="xl" style={{ opacity: 0.9, maxWidth: 600 }}>
                Rejoignez plus de 20 000 entreprises qui nous font confiance pour leur paie au quotidien.
              </Text>
              <Group gap="md">
                <Button component={Link} href="/onboarding" size="xl" bg="white" c="payfit.7" radius="md" px={40}>
                  Démarrer l'essai gratuit
                </Button>
                <Button component={Link} href="/demo" size="xl" variant="outline" color="white" radius="md" px={40} style={{ borderColor: 'rgba(255,255,255,0.4)', color: 'white' }}>
                  Parler à un expert
                </Button>
              </Group>
              <Text size="sm" opacity={0.7}>Sans engagement • Configuration en 24h</Text>
            </Stack>
          </Card>
          </AnimatedSection>
        </Container>
      </Box>

      {/* Footer */}
      <Box component="footer" py={60} style={{ borderTop: `1px solid rgba(0,0,0,0.05)` }}>
        <Container size="lg">
          <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing={50}>
            <Stack gap="md">
              <Group gap="sm">
                <ThemeIcon size={32} radius="md" color="payfit.6">
                  <Text fw={800}>P</Text>
                </ThemeIcon>
                <Text fw={800} size="lg">PayFit</Text>
              </Group>
              <Text size="sm" c="dimmed">
                Le logiciel de paie et RH qui simplifie le quotidien des TPE et PME européennes.
              </Text>
            </Stack>

            <Stack gap="md">
              <Text fw={700}>Produit</Text>
              <Stack gap="xs">
                <Text size="sm" component={Link} href="#" c="dimmed">Fonctionnalités</Text>
                <Text size="sm" component={Link} href="#" c="dimmed">Tarifs</Text>
                <Text size="sm" component={Link} href="#" c="dimmed">Assistant IA</Text>
                <Text size="sm" component={Link} href="#" c="dimmed">Sécurité</Text>
              </Stack>
            </Stack>

            <Stack gap="md">
              <Text fw={700}>Ressources</Text>
              <Stack gap="xs">
                <Text size="sm" component={Link} href="#" c="dimmed">Centre d'aide</Text>
                <Text size="sm" component={Link} href="#" c="dimmed">Blog RH</Text>
                <Text size="sm" component={Link} href="#" c="dimmed">Guides Paie</Text>
                <Text size="sm" component={Link} href="#" c="dimmed">Lexique</Text>
              </Stack>
            </Stack>

            <Stack gap="md">
              <Text fw={700}>Légal</Text>
              <Stack gap="xs">
                <Text size="sm" component={Link} href="#" c="dimmed">Mentions légales</Text>
                <Text size="sm" component={Link} href="#" c="dimmed">Cookies</Text>
                <Text size="sm" component={Link} href="#" c="dimmed">RGPD</Text>
                <Text size="sm" component={Link} href="#" c="dimmed">Conditions d'utilisation</Text>
              </Stack>
            </Stack>
          </SimpleGrid>

          <Divider mt={60} mb="xl" />

          <Group justify="space-between">
            <Text size="sm" c="dimmed">© 2025 PayFit SAS. Tous droits réservés.</Text>
            <Group gap="xl">
              <Text size="sm" c="dimmed">Suivez-nous</Text>
            </Group>
          </Group>
        </Container>
      </Box>
    </Box>
  )
}

function FeatureItem({ icon: Icon, title, description }: any) {
  return (
    <Group align="flex-start" wrap="nowrap">
      <ThemeIcon color="payfit.6" variant="light" size="lg" radius="md" mt={4}>
        <Icon size={20} />
      </ThemeIcon>
      <Box>
        <Text fw={700} size="lg">{title}</Text>
        <Text size="sm" c="dimmed">{description}</Text>
      </Box>
    </Group>
  )
}

function StatsCard({ image, title, description }: any) {
  return (
    <Card p={0} radius="lg" shadow="sm" withBorder h="100%">
      <Image src={image} height={200} alt={title} />
      <Box p="xl">
        <Text fw={700} size="lg" mb="xs">{title}</Text>
        <Text size="sm" c="dimmed">{description}</Text>
      </Box>
    </Card>
  )
}

function FeatureCard({ icon: Icon, title, description }: any) {
  return (
    <Card p="xl" radius="lg" shadow="sm" withBorder>
      <ThemeIcon size={50} radius="md" variant="light" color="payfit.6" mb="xl">
        <Icon size={30} />
      </ThemeIcon>
      <Text fw={800} size="lg" mb="sm">{title}</Text>
      <Text size="sm" c="dimmed" lh={1.6}>{description}</Text>
    </Card>
  )
}

function TestimonialCard({ quote, author, role }: any) {
  return (
    <Card p="xl" radius="lg" shadow="sm" withBorder style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <Box>
        <Group gap={4} mb="lg">
          {[...Array(5)].map((_, i) => <IconStar key={i} size={16} fill="var(--mantine-color-yellow-4)" color="var(--mantine-color-yellow-4)" />)}
        </Group>
        <Text fw={500} size="lg" mb="xl" style={{ fontStyle: 'italic' }}>"{quote}"</Text>
      </Box>
      <Group gap="sm">
        <Avatar color="payfit" radius="xl" size="md">{author[0]}</Avatar>
        <Box>
          <Text fw={700} size="sm">{author}</Text>
          <Text size="xs" c="dimmed">{role}</Text>
        </Box>
      </Group>
    </Card>
  )
}
