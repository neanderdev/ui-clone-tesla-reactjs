import { HTMLAttributes, ReactNode, useEffect, useRef } from 'react';

import useModel from '../useModel';

import { Container } from './styles';

interface ModelSectionProps extends HTMLAttributes<HTMLDivElement> {
  modelName: string;
  overlayNode: ReactNode;
}

export default function ModelSection({ modelName, overlayNode, children, ...rest }: ModelSectionProps) {
  const { registerModel } = useModel(modelName);

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      registerModel({ modelName, overlayNode, sectionRef });
    }
  }, []);

  return (
    <Container
      ref={sectionRef}
      {...rest}
    >
      {children}
    </Container>
  );
}
