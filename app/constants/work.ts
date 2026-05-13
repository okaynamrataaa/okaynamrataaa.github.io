import * as THREE from "three";
import { WorkTimelinePoint } from "../types";

export const WORK_TIMELINE: WorkTimelinePoint[] = [
  {
    point: new THREE.Vector3(0, 0, 0),
    year: '2025-2026',
    title: 'Zutsu Media',
    subtitle: 'Motion Graphic Designer',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-4, -4, -3),
    year: '2025',
    title: 'Cinekorn Entertainments',
    subtitle: 'Film Distributor',
    position: 'left',
  },
  {
    point: new THREE.Vector3(-3, -1, -6),
    year: '2025',
    title: 'Blank Media',
    subtitle: '360 Digital Marketing Agency',
    position: 'left',
  },
  {
    point: new THREE.Vector3(0, -1, -10),
    year: '2024',
    title: 'Beanbag Media',
    subtitle: 'Startup Agency',
    position: 'left',
  },
  {
    point: new THREE.Vector3(1, 1, -12),
    year: '2021 - 2024',
    title: 'Mumbai University',
    subtitle: "BAMMC Graduate",
    position: 'right',
  }
]