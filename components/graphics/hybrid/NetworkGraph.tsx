'use client';
import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { ThreeJSOverlay } from '@/lib/threejs-overlay';

export function NetworkGraph({ nodes, links }: { nodes: any[], links: any[] }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const overlay = new ThreeJSOverlay(containerRef.current);
    
    // D3 force simulation
    const simulation = d3.forceSimulation(nodes)
      .force('charge', d3.forceManyBody().strength(-30))
      .force('link', d3.forceLink(links).distance(100));

    // Sync with Three.js
    simulation.on('tick', () => {
      overlay.updatePositions(nodes);
    });

    return () => {
      simulation.stop();
      overlay.dispose();
    };
  }, [nodes, links]);

  return <div ref={containerRef} className="w-full h-[500px]" />;
}