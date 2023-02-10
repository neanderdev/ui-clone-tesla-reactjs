import { Container, Heading, Buttons } from './styles';

interface DefaultOverlayContentProps {
  label: string;
  description: string;
}

export default function DefaultOverlayContent({ label, description }: DefaultOverlayContentProps) {
  return (
    <Container>
      <Heading>
        <h1>{label}</h1>

        <h2>{description}</h2>
      </Heading>

      <Buttons>
        <button>Custom Order</button>

        <button className='white'>Existing Inventory</button>
      </Buttons>
    </Container>
  );
}
