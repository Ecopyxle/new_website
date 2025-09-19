<?php
/**
 * Advanced Animations and Visual Effects
 * Inspired by Scout Motors website design
 */

// Enhanced AI doodles with more sophisticated animations
$advanced_doodles = [
    [
        'type' => 'floating-neural',
        'x' => rand(5, 95),
        'y' => rand(10, 90),
        'rotation' => rand(-15, 15),
        'size' => rand(100, 150),
        'opacity' => rand(15, 25) / 100,
        'color' => 'blue',
        'animation' => 'float-slow'
    ],
    [
        'type' => 'pulsing-circuit',
        'x' => rand(5, 95),
        'y' => rand(10, 90),
        'rotation' => rand(-15, 15),
        'size' => rand(120, 180),
        'opacity' => rand(20, 30) / 100,
        'color' => 'purple',
        'animation' => 'pulse'
    ],
    [
        'type' => 'flowing-data',
        'x' => rand(5, 95),
        'y' => rand(10, 90),
        'rotation' => rand(-15, 15),
        'size' => rand(110, 160),
        'opacity' => rand(18, 28) / 100,
        'color' => 'green',
        'animation' => 'flow'
    ],
    [
        'type' => 'rotating-brain',
        'x' => rand(5, 95),
        'y' => rand(10, 90),
        'rotation' => rand(-15, 15),
        'size' => rand(90, 140),
        'opacity' => rand(20, 30) / 100,
        'color' => 'cyan',
        'animation' => 'rotate-slow'
    ],
    [
        'type' => 'scaling-ml',
        'x' => rand(5, 95),
        'y' => rand(10, 90),
        'rotation' => rand(-15, 15),
        'size' => rand(100, 160),
        'opacity' => rand(15, 25) / 100,
        'color' => 'indigo',
        'animation' => 'scale-pulse'
    ],
    [
        'type' => 'drifting-chart',
        'x' => rand(5, 95),
        'y' => rand(10, 90),
        'rotation' => rand(-15, 15),
        'size' => rand(130, 190),
        'opacity' => rand(20, 30) / 100,
        'color' => 'pink',
        'animation' => 'drift'
    ],
    [
        'type' => 'bouncing-algorithm',
        'x' => rand(5, 95),
        'y' => rand(10, 90),
        'rotation' => rand(-15, 15),
        'size' => rand(80, 130),
        'opacity' => rand(18, 28) / 100,
        'color' => 'yellow',
        'animation' => 'bounce-slow'
    ],
    [
        'type' => 'glowing-chip',
        'x' => rand(5, 95),
        'y' => rand(10, 90),
        'rotation' => rand(-15, 15),
        'size' => rand(100, 150),
        'opacity' => rand(20, 30) / 100,
        'color' => 'emerald',
        'animation' => 'glow'
    ]
];

function getAdvancedColorClass($color) {
    $colors = [
        'blue' => 'text-blue-400',
        'purple' => 'text-purple-400',
        'green' => 'text-green-400',
        'cyan' => 'text-cyan-400',
        'indigo' => 'text-indigo-400',
        'pink' => 'text-pink-400',
        'yellow' => 'text-yellow-400',
        'emerald' => 'text-emerald-400'
    ];
    return $colors[$color] ?? 'text-blue-400';
}

function generateFloatingNeural($size) {
    return '<svg width="' . $size . '" height="' . ($size * 0.8) . '" viewBox="0 0 120 96">
        <defs>
            <linearGradient id="neuralGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:currentColor;stop-opacity:0.8" />
                <stop offset="100%" style="stop-color:currentColor;stop-opacity:0.3" />
            </linearGradient>
            <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>
        </defs>
        <g class="text-blue-400" fill="none" stroke="url(#neuralGrad)" stroke-width="1.5" filter="url(#glow)">
            <!-- Floating nodes -->
            <circle cx="20" cy="20" r="4" fill="currentColor" opacity="0.8">
                <animate attributeName="opacity" values="0.8;0.4;0.8" dur="3s" repeatCount="indefinite"/>
            </circle>
            <circle cx="60" cy="15" r="5" fill="currentColor" opacity="0.9">
                <animate attributeName="opacity" values="0.9;0.3;0.9" dur="4s" repeatCount="indefinite"/>
            </circle>
            <circle cx="100" cy="25" r="3" fill="currentColor" opacity="0.7">
                <animate attributeName="opacity" values="0.7;0.5;0.7" dur="2.5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="30" cy="60" r="4" fill="currentColor" opacity="0.8">
                <animate attributeName="opacity" values="0.8;0.4;0.8" dur="3.5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="70" cy="70" r="5" fill="currentColor" opacity="0.9">
                <animate attributeName="opacity" values="0.9;0.3;0.9" dur="4.5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="90" cy="80" r="3" fill="currentColor" opacity="0.7">
                <animate attributeName="opacity" values="0.7;0.5;0.7" dur="2.8s" repeatCount="indefinite"/>
            </circle>
            
            <!-- Animated connections -->
            <path d="M20 20 Q40 10 60 15 Q80 20 100 25" stroke-dasharray="3,3" stroke-width="2">
                <animate attributeName="stroke-dashoffset" values="0;6" dur="2s" repeatCount="indefinite"/>
            </path>
            <path d="M60 15 Q45 40 30 60 Q50 80 70 70" stroke-dasharray="4,4" stroke-width="1.5">
                <animate attributeName="stroke-dashoffset" values="0;8" dur="3s" repeatCount="indefinite"/>
            </path>
            <path d="M100 25 Q85 50 90 80" stroke-dasharray="2,2" stroke-width="1.8">
                <animate attributeName="stroke-dashoffset" values="0;4" dur="2.5s" repeatCount="indefinite"/>
            </path>
        </g>
    </svg>';
}

function generatePulsingCircuit($size) {
    return '<svg width="' . $size . '" height="' . ($size * 0.7) . '" viewBox="0 0 140 98">
        <defs>
            <linearGradient id="circuitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:currentColor;stop-opacity:0.9" />
                <stop offset="50%" style="stop-color:currentColor;stop-opacity:0.6" />
                <stop offset="100%" style="stop-color:currentColor;stop-opacity:0.3" />
            </linearGradient>
        </defs>
        <g class="text-purple-400" fill="none" stroke="url(#circuitGrad)" stroke-width="1.2">
            <!-- Main board with pulsing effect -->
            <rect x="20" y="20" width="100" height="60" rx="4" fill="currentColor" opacity="0.1">
                <animate attributeName="opacity" values="0.1;0.3;0.1" dur="2s" repeatCount="indefinite"/>
            </rect>
            
            <!-- Circuit components -->
            <rect x="30" y="30" width="20" height="12" rx="2" fill="currentColor" opacity="0.4">
                <animate attributeName="opacity" values="0.4;0.8;0.4" dur="1.5s" repeatCount="indefinite"/>
            </rect>
            <rect x="60" y="30" width="20" height="12" rx="2" fill="currentColor" opacity="0.4">
                <animate attributeName="opacity" values="0.4;0.8;0.4" dur="1.8s" repeatCount="indefinite"/>
            </rect>
            <rect x="90" y="30" width="20" height="12" rx="2" fill="currentColor" opacity="0.4">
                <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2.2s" repeatCount="indefinite"/>
            </rect>
            
            <!-- Pulsing circles -->
            <circle cx="40" cy="60" r="6" fill="currentColor" opacity="0.6">
                <animate attributeName="r" values="6;10;6" dur="2s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="70" cy="60" r="6" fill="currentColor" opacity="0.6">
                <animate attributeName="r" values="6;10;6" dur="2.5s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2.5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="100" cy="60" r="6" fill="currentColor" opacity="0.6">
                <animate attributeName="r" values="6;10;6" dur="3s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.6;0.2;0.6" dur="3s" repeatCount="indefinite"/>
            </circle>
            
            <!-- Animated circuit traces -->
            <path d="M50 36 L60 36" stroke-width="3">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="1s" repeatCount="indefinite"/>
            </path>
            <path d="M80 36 L90 36" stroke-width="3">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="1.2s" repeatCount="indefinite"/>
            </path>
            <path d="M40 66 L70 66" stroke-width="2">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite"/>
            </path>
            <path d="M70 66 L100 66" stroke-width="2">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="1.8s" repeatCount="indefinite"/>
            </path>
            
            <!-- AI text with glow -->
            <text x="70" y="85" text-anchor="middle" font-size="10" font-weight="bold" fill="currentColor" opacity="0.8">
                <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite"/>
                AI CIRCUIT
            </text>
        </g>
    </svg>';
}

function generateFlowingData($size) {
    return '<svg width="' . $size . '" height="' . ($size * 0.8) . '" viewBox="0 0 120 96">
        <defs>
            <linearGradient id="dataGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style="stop-color:currentColor;stop-opacity:0.8" />
                <stop offset="50%" style="stop-color:currentColor;stop-opacity:0.4" />
                <stop offset="100%" style="stop-color:currentColor;stop-opacity:0.8" />
            </linearGradient>
        </defs>
        <g class="text-green-400" fill="none" stroke="url(#dataGrad)" stroke-width="1.5">
            <!-- Flowing data streams -->
            <path d="M10 20 Q30 15 50 20 Q70 25 90 20 Q110 15 130 20" stroke-dasharray="5,5">
                <animate attributeName="stroke-dashoffset" values="0;10" dur="2s" repeatCount="indefinite"/>
            </path>
            <path d="M10 40 Q30 35 50 40 Q70 45 90 40 Q110 35 130 40" stroke-dasharray="3,3">
                <animate attributeName="stroke-dashoffset" values="0;6" dur="1.5s" repeatCount="indefinite"/>
            </path>
            <path d="M10 60 Q30 55 50 60 Q70 65 90 60 Q110 55 130 60" stroke-dasharray="4,4">
                <animate attributeName="stroke-dashoffset" values="0;8" dur="2.5s" repeatCount="indefinite"/>
            </path>
            <path d="M10 80 Q30 75 50 80 Q70 85 90 80 Q110 75 130 80" stroke-dasharray="6,6">
                <animate attributeName="stroke-dashoffset" values="0;12" dur="3s" repeatCount="indefinite"/>
            </path>
            
            <!-- Data nodes -->
            <circle cx="20" cy="20" r="3" fill="currentColor" opacity="0.8">
                <animate attributeName="opacity" values="0.8;0.2;0.8" dur="1s" repeatCount="indefinite"/>
            </circle>
            <circle cx="50" cy="20" r="3" fill="currentColor" opacity="0.8">
                <animate attributeName="opacity" values="0.8;0.2;0.8" dur="1.2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="80" cy="20" r="3" fill="currentColor" opacity="0.8">
                <animate attributeName="opacity" values="0.8;0.2;0.8" dur="1.4s" repeatCount="indefinite"/>
            </circle>
            <circle cx="110" cy="20" r="3" fill="currentColor" opacity="0.8">
                <animate attributeName="opacity" values="0.8;0.2;0.8" dur="1.6s" repeatCount="indefinite"/>
            </circle>
        </g>
    </svg>';
}

// Generate the advanced doodles
foreach ($advanced_doodles as $doodle) {
    $colorClass = getAdvancedColorClass($doodle['color']);
    $animationClass = $doodle['animation'];
    $svg = '';
    
    switch ($doodle['type']) {
        case 'floating-neural':
            $svg = generateFloatingNeural($doodle['size']);
            break;
        case 'pulsing-circuit':
            $svg = generatePulsingCircuit($doodle['size']);
            break;
        case 'flowing-data':
            $svg = generateFlowingData($doodle['size']);
            break;
        // Add more cases for other doodle types...
        default:
            $svg = generateFloatingNeural($doodle['size']);
    }
    
    echo '<div class="absolute ' . $colorClass . ' ' . $animationClass . '" style="top:' . $doodle['y'] . '%;left:' . $doodle['x'] . '%;transform:rotate(' . $doodle['rotation'] . 'deg);opacity:' . $doodle['opacity'] . '">';
    echo $svg;
    echo '</div>';
}
?>
