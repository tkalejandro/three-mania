import { fontLibrary } from '@/helpers';
import { Image, ImageProps, Text } from '@react-three/drei';
import React from 'react';
import { Vector3 } from 'three'; // Import Vector3 from three.js library
import { useAppBreakpoints } from '@/hooks';
type EnhancedImageProps = ImageProps & {
  caption: string;
};

const EnhancedImage = ({ caption, ...props }: EnhancedImageProps) => {
  const { position, scale } = props;
  const { isBigTablet } = useAppBreakpoints();
  // Check if position exists and is a Vector3 object
  if (!position || !(position instanceof Vector3) || !scale) return null; 

  const imageY = typeof scale === 'number' ? scale : scale[1] ?? 0;

  const textSize = isBigTablet ? 0.1 * 1.2 : 0.085;
  return (
    <group>
      <Image {...props} />
      <Text
        textAlign="center"
        maxWidth={15}
        font={fontLibrary.montserrat.bold}
        scale={textSize}
        // Divide by 2 because is half of the image. and  65% of it we will use.  The lower the higher the text
        position={[position.x, position.y - (imageY / 2) * 0.65, position.z + 0.001]}
      >
        {caption}
      </Text>
    </group>
  );
};

export default EnhancedImage;
