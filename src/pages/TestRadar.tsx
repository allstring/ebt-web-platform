// TestRadar Page - DefenseRadarHero 컴포넌트 테스트
import DefenseRadarHero from '@/components/DefenseRadarHero';

const TARGETS = [
  { id: 1, label: 'INTEGRATED DEFENSE', description: '지능형 통합 방어 시스템', angle: 45, distance: 32, link: '/defense', threat: 'low' as const },
  { id: 2, label: 'AI SURVEILLANCE', description: '자율형 감시 정찰 솔루션', angle: 135, distance: 26, link: '/ai', threat: 'medium' as const },
  { id: 3, label: 'PRECISION STRIKE', description: '초정밀 타격 유도 기술', angle: 225, distance: 38, link: '/precision', threat: 'high' as const },
  { id: 4, label: 'NETWORK C4I', description: '차세대 지휘 통제 네트워크', angle: 315, distance: 30, link: '/network', threat: 'medium' as const },
];

export default function TestRadarPage() {
  return (
    <DefenseRadarHero
      targets={TARGETS}
    />
  );
}
