import DefaultOverlayContent from '../DefaultOverlayContent';
import { ModelSection, ModelsWrapper } from '../Model';
import UniqueOverlay from '../UniqueOverlay';

import { Container, Spacer } from './styles';

export default function Page() {
  const arraysModels = [
    'Model One',
    'Model Two',
    'Model Three',
    'Model Four',
    'Model Five',
    'Model Six',
    'Model Seven',
  ];

  return (
    <Container>
      <ModelsWrapper>
        <div>
          {
            arraysModels.map((modelName, index) => (
              <ModelSection
                key={modelName}
                className='colored'
                modelName={modelName}
                overlayNode={
                  <DefaultOverlayContent
                    label={modelName}
                    description='Order Online for Delivery'
                  />
                }
              />
            ))
          }
        </div>

        <Spacer />

        <UniqueOverlay />
      </ModelsWrapper>
    </Container>
  );
}
