import React, { useEffect, useRef, useState } from 'react';
import { GroupProps, useFrame } from '@react-three/fiber';
import { Group, Mesh, MeshStandardMaterial } from 'three';
import { Center, Text } from '@react-three/drei';
import { useTheme } from '@chakra-ui/system';
import { ThreeColor, ThreeSize } from '@/types/ExperienceTypes';

interface ThreeDButtonProps extends GroupProps {
  size?: 'sm' | 'md' | 'lg';
  color?: ThreeColor;
  text: string;
}

const ThreeDButton = ({ size = 'md', color, text, ...props }: ThreeDButtonProps) => {
  const theme = useTheme();
  console.log(theme);
  const buttonRef = useRef<Mesh>(null);
  const textRef = useRef<Group>(null);
  const [buttonSize, setButtonSize] = useState<ThreeSize>({
    sm: [0.25, 0.09, 0.05],
    md: [0.3, 0.12, 0.05],
    lg: [0.4, 0.14, 0.05],
  });
  const [buttonColor, setButtonColor] = useState<string>();
  const [textColor, setTextColor] = useState<string>();
  const [fontSize, setFontSize] = useState<number>();

  useEffect(() => {
    colorToUse();
    setButtonSize((prev) => ({ ...prev, [size]: buttonSize[size] }));
  }, [size, color]);

  const colorToUse = () => {
    switch (color) {
      case 'primary':
        setButtonColor(theme.colors.primary.main);
        setTextColor(theme.colors.white);
        break;
      case 'secondary':
        setButtonColor(theme.colors.secondary.main);
        setTextColor(theme.colors.white);
        break;
      case 'warning':
        setButtonColor(theme.colors.warning.main);
        setTextColor(theme.colors.white);
        break;
      case 'info':
        setButtonColor(theme.colors.info.main);
        setTextColor(theme.colors.white);
        break;
      case 'error':
        setButtonColor(theme.colors.error.main);
        setTextColor(theme.colors.white);
        break;
      case 'success':
        setButtonColor(theme.colors.success.main);
        setTextColor(theme.colors.white);
        break;
      case 'black':
        setButtonColor(theme.colors.black);
        setTextColor(theme.colors.white);
        break;
      case 'white':
        setButtonColor(theme.colors.white);
        setTextColor(theme.colors.black);
        break;
      default:
        // Handle any other cases or set a default color
        setButtonColor(theme.colors.primary.main);
    }
  };

  const assignFontSize = () => {
    if (size === 'sm') {
      return 0.06;
    } else if (size === 'md') {
      return 0.065;
    }
    return 0.07;
  };

  return (
    <group {...props}>
      {/* Button */}

      <mesh ref={buttonRef} position={[0, 0, 0]}>
        <boxGeometry args={[...buttonSize[size], 1, 1, 1]} />
        <meshStandardMaterial color={buttonColor} />
      </mesh>

      {/* Text */}
      <Text
        position={[0, -0.005, 0.028]}
        ref={textRef}
        fontSize={assignFontSize()}
        font="Arial"
        color={textColor}
      >
        {text}
      </Text>
    </group>
  );
};

export default ThreeDButton;
