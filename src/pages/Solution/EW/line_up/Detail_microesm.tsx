import {
  Container,
  Title,
  Text,
  Paper,
  Badge,
  SimpleGrid,
  Card,
  Tabs,
  Table,
  Accordion,
  List,
  ThemeIcon,
  Group,
  Stack,
  Box,
  rem,
} from "@mantine/core"
import {
  Feather,
  Radar,
  Cpu,
  Battery,
  Database,
  EyeOff,
  Shield,
  Users,
  Anchor,
  Plane,
  Network,
  Tablet,
  Laptop,
  Check,
  Target,
  Zap,
} from "lucide-react"
import microesmHeroImg from "@/assets/images/solution/EW/MicroESM/hero.webp"
import microesmMainImg from "@/assets/images/solution/EW/MicroESM/main.webp"
import { useLocale } from "@/lib/i18n"
import { ProductContactSection } from "@/components/product-contact-section"
import { DetailPageGate } from "@/components/DetailPageGate"

const featureIcons: Record<string, React.ElementType> = {
  feather: Feather,
  radar: Radar,
  cpu: Cpu,
  battery: Battery,
  database: Database,
  eyeOff: EyeOff,
  shield: Shield,
}

const useCaseIcons: Record<string, React.ElementType> = {
  users: Users,
  anchor: Anchor,
  plane: Plane,
  network: Network,
}

export default function DetailMicroESMPage() {
  const { t } = useLocale()
  const microesm = t.microesm

  return (
    <DetailPageGate>
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-24 lg:py-32">
          <Container size="lg">
            <Stack align="center" gap="lg" mb="xl">
              <Title
                order={1}
                ta="center"
                fz={{ base: rem(36), md: rem(48) }}
                fw={600}
                c="var(--mantine-color-text)"
              >
                {microesm.title}
              </Title>
              <Text
                size="sm"
                fw={600}
                tt="uppercase"
                ta="center"
                c="dimmed"
                style={{ letterSpacing: "0.1em" }}
              >
                {microesm.subtitle}
              </Text>
              <Group gap="sm" justify="center" wrap="wrap">
                <Badge size="lg" variant="light" color="blue" leftSection={<Feather size={14} />}>
                  {microesm.highlights.weight}
                </Badge>
                <Badge size="lg" variant="light" color="cyan" leftSection={<Radar size={14} />}>
                  {microesm.highlights.frequency}
                </Badge>
                <Badge size="lg" variant="light" color="teal" leftSection={<Target size={14} />}>
                  {microesm.highlights.coverage}
                </Badge>
                <Badge size="lg" variant="light" color="violet" leftSection={<Zap size={14} />}>
                  {microesm.highlights.pulses}
                </Badge>
              </Group>
            </Stack>
          </Container>

          {/* Full-width Hero Image */}
          <Box mb="xl">
            <img
              src={microesmHeroImg}
              alt={microesm.title}
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </Box>

          <Container size="md">
            <Text
              ta="center"
              fz={{ base: rem(24), md: rem(32) }}
              fw={500}
              c="var(--mantine-color-text)"
              lh={1.4}
            >
              {microesm.tagline}
            </Text>
          </Container>
        </section>

        {/* Overview Section */}
        <Box component="section" py={{ base: 60, md: 80 }} className="bg-card border-t border-border">
          <Container size="lg">
            <Paper radius="lg" p={{ base: "lg", md: "xl" }} withBorder>
              <Stack gap="lg">
                <Title order={2} fz={{ base: rem(24), md: rem(30) }} fw={600}>
                  {microesm.overview.title}
                </Title>
                <Text size="lg" c="dimmed" lh={1.7}>
                  {microesm.overview.description}
                </Text>
                <Box mt="md">
                  <Text fw={600} mb="sm">
                    {microesm.overview.configurationsTitle}:
                  </Text>
                  <Group gap="md">
                    {microesm.overview.configurations.map((config, index) => (
                      <Badge
                        key={index}
                        size="xl"
                        variant="outline"
                        color={index === 0 ? "blue" : "grape"}
                        leftSection={index === 0 ? <Tablet size={16} /> : <Laptop size={16} />}
                        styles={{ root: { textTransform: "none" } }}
                      >
                        {config.name} - {config.description}
                      </Badge>
                    ))}
                  </Group>
                </Box>
              </Stack>
            </Paper>
          </Container>
        </Box>

        {/* Main Image Section */}
        <Box component="section" className="border-t border-border">
          <Container size="lg" py={{ base: 40, md: 60 }}>
            <Box style={{ borderRadius: rem(12), overflow: "hidden" }}>
              <img
                src={microesmMainImg}
                alt={microesm.title}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
            </Box>
          </Container>
        </Box>

        {/* Features Section */}
        <Box component="section" py={{ base: 60, md: 80 }} className="bg-card border-t border-border">
          <Container size="lg">
            <Title order={2} fz={{ base: rem(24), md: rem(30) }} fw={600} mb="xl">
              {microesm.features.title}
            </Title>
            <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
              {microesm.features.items.map((feature, index) => {
                const IconComponent = featureIcons[feature.icon] || Shield
                return (
                  <Card key={index} padding="lg" radius="md" withBorder shadow="sm">
                    <Stack gap="md">
                      <ThemeIcon size={48} radius="md" variant="light" color="blue">
                        <IconComponent size={24} />
                      </ThemeIcon>
                      <Title order={4} fw={600}>
                        {feature.title}
                      </Title>
                      <Text size="sm" c="dimmed" lh={1.6}>
                        {feature.description}
                      </Text>
                    </Stack>
                  </Card>
                )
              })}
            </SimpleGrid>
          </Container>
        </Box>

        {/* Configurations Section */}
        <Box component="section" py={{ base: 60, md: 80 }} className="border-t border-border">
          <Container size="lg">
            <Title order={2} fz={{ base: rem(24), md: rem(30) }} fw={600} mb="xl">
              {microesm.configurations.title}
            </Title>
            <Tabs defaultValue="tablet" variant="outline" radius="md">
              <Tabs.List grow mb="lg">
                <Tabs.Tab
                  value="tablet"
                  leftSection={<Tablet size={18} />}
                  fz="md"
                  fw={500}
                >
                  {microesm.configurations.tablet.name}
                </Tabs.Tab>
                <Tabs.Tab
                  value="laptop"
                  leftSection={<Laptop size={18} />}
                  fz="md"
                  fw={500}
                >
                  {microesm.configurations.laptop.name}
                </Tabs.Tab>
              </Tabs.List>

              <Tabs.Panel value="tablet">
                <Paper radius="md" p="xl" withBorder>
                  <Stack gap="lg">
                    <Group>
                      <ThemeIcon size={56} radius="xl" variant="gradient" gradient={{ from: "blue", to: "cyan" }}>
                        <Tablet size={28} />
                      </ThemeIcon>
                      <div>
                        <Title order={3}>{microesm.configurations.tablet.name}</Title>
                        <Text c="dimmed">{microesm.configurations.tablet.subtitle}</Text>
                      </div>
                    </Group>
                    <Box>
                      <Text fw={600} mb="sm">{microesm.configurations.tablet.bestFor}:</Text>
                      <List
                        spacing="sm"
                        icon={
                          <ThemeIcon size={20} radius="xl" color="blue">
                            <Check size={12} />
                          </ThemeIcon>
                        }
                      >
                        {microesm.configurations.tablet.items.map((item, idx) => (
                          <List.Item key={idx}>
                            <Text size="sm">{item}</Text>
                          </List.Item>
                        ))}
                      </List>
                    </Box>
                  </Stack>
                </Paper>
              </Tabs.Panel>

              <Tabs.Panel value="laptop">
                <Paper radius="md" p="xl" withBorder>
                  <Stack gap="lg">
                    <Group>
                      <ThemeIcon size={56} radius="xl" variant="gradient" gradient={{ from: "grape", to: "violet" }}>
                        <Laptop size={28} />
                      </ThemeIcon>
                      <div>
                        <Title order={3}>{microesm.configurations.laptop.name}</Title>
                        <Text c="dimmed">{microesm.configurations.laptop.subtitle}</Text>
                      </div>
                    </Group>
                    <Box>
                      <Text fw={600} mb="sm">{microesm.configurations.laptop.bestFor}:</Text>
                      <List
                        spacing="sm"
                        icon={
                          <ThemeIcon size={20} radius="xl" color="grape">
                            <Check size={12} />
                          </ThemeIcon>
                        }
                      >
                        {microesm.configurations.laptop.items.map((item, idx) => (
                          <List.Item key={idx}>
                            <Text size="sm">{item}</Text>
                          </List.Item>
                        ))}
                      </List>
                    </Box>
                  </Stack>
                </Paper>
              </Tabs.Panel>
            </Tabs>
          </Container>
        </Box>

        {/* Specifications Section */}
        <Box component="section" py={{ base: 60, md: 80 }} className="bg-card border-t border-border">
          <Container size="lg">
            <Title order={2} fz={{ base: rem(24), md: rem(30) }} fw={600} mb="xl">
              {microesm.specs.title}
            </Title>

            <Stack gap="xl">
              {/* Performance Specs */}
              <Paper radius="md" p="lg" withBorder>
                <Title order={3} fz="xl" fw={600} mb="lg">
                  {microesm.specs.categories.performance.title}
                </Title>
                <Table striped highlightOnHover withTableBorder withColumnBorders>
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Th style={{ width: "40%" }}>Item</Table.Th>
                      <Table.Th>Value</Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    {microesm.specs.categories.performance.items.map((item, index) => (
                      <Table.Tr key={index}>
                        <Table.Td fw={500}>{item.label}</Table.Td>
                        <Table.Td>{item.value}</Table.Td>
                      </Table.Tr>
                    ))}
                  </Table.Tbody>
                </Table>
              </Paper>

              {/* Physical Specs Comparison */}
              <Paper radius="md" p="lg" withBorder>
                <Title order={3} fz="xl" fw={600} mb="lg">
                  {microesm.specs.categories.physical.title}
                </Title>
                <Table striped highlightOnHover withTableBorder withColumnBorders>
                  <Table.Thead>
                    <Table.Tr>
                      {microesm.specs.categories.physical.headers.map((header, index) => (
                        <Table.Th key={index} ta={index === 0 ? "left" : "center"}>
                          {header}
                        </Table.Th>
                      ))}
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    {microesm.specs.categories.physical.items.map((item, index) => (
                      <Table.Tr key={index}>
                        <Table.Td fw={500}>{item.label}</Table.Td>
                        <Table.Td ta="center">{item.tablet}</Table.Td>
                        <Table.Td ta="center">{item.laptop}</Table.Td>
                      </Table.Tr>
                    ))}
                  </Table.Tbody>
                </Table>
              </Paper>
            </Stack>
          </Container>
        </Box>

        {/* Use Cases Section */}
        <Box component="section" py={{ base: 60, md: 80 }} className="border-t border-border">
          <Container size="lg">
            <Title order={2} fz={{ base: rem(24), md: rem(30) }} fw={600} mb="xl">
              {microesm.useCases.title}
            </Title>
            <Accordion variant="separated" radius="md">
              {microesm.useCases.items.map((useCase, index) => {
                const IconComponent = useCaseIcons[useCase.icon] || Users
                return (
                  <Accordion.Item key={index} value={`usecase-${index}`}>
                    <Accordion.Control
                      icon={
                        <ThemeIcon
                          size={40}
                          radius="xl"
                          variant="light"
                          color={["blue", "teal", "grape", "orange"][index % 4]}
                        >
                          <IconComponent size={20} />
                        </ThemeIcon>
                      }
                    >
                      <div>
                        <Text fw={600} fz="lg">{useCase.title}</Text>
                        <Text size="sm" c="dimmed">{useCase.subtitle}</Text>
                      </div>
                    </Accordion.Control>
                    <Accordion.Panel>
                      <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl" mt="md">
                        <Box>
                          <Text fw={600} mb="sm" c="blue">
                            Applications
                          </Text>
                          <List
                            spacing="xs"
                            icon={
                              <ThemeIcon size={16} radius="xl" color="blue" variant="light">
                                <Check size={10} />
                              </ThemeIcon>
                            }
                          >
                            {useCase.applications.map((app, idx) => (
                              <List.Item key={idx}>
                                <Text size="sm">{app}</Text>
                              </List.Item>
                            ))}
                          </List>
                        </Box>
                        <Box>
                          <Text fw={600} mb="sm" c="teal">
                            Benefits
                          </Text>
                          <List
                            spacing="xs"
                            icon={
                              <ThemeIcon size={16} radius="xl" color="teal" variant="light">
                                <Check size={10} />
                              </ThemeIcon>
                            }
                          >
                            {useCase.benefits.map((benefit, idx) => (
                              <List.Item key={idx}>
                                <Text size="sm">{benefit}</Text>
                              </List.Item>
                            ))}
                          </List>
                        </Box>
                      </SimpleGrid>
                    </Accordion.Panel>
                  </Accordion.Item>
                )
              })}
            </Accordion>
          </Container>
        </Box>

        {/* Contact Section */}
        <ProductContactSection text={microesm.contact.text} suffix={microesm.contact.suffix} />
      </div>
    </DetailPageGate>
  )
}
