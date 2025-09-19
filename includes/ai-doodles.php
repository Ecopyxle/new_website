<?php
/**
 * AI Doodles Background Component
 * Generates animated AI-themed SVG doodles similar to Scout Motors style
 */

// Generate random positions and rotations for variety
$doodles = [
    [
        'type' => 'neural-network',
        'x' => rand(5, 95),
        'y' => rand(10, 90),
        'rotation' => rand(-15, 15),
        'size' => rand(80, 120),
        'opacity' => rand(20, 30) / 100,
        'color' => 'blue'
    ],
    [
        'type' => 'circuit-board',
        'x' => rand(5, 95),
        'y' => rand(10, 90),
        'rotation' => rand(-15, 15),
        'size' => rand(100, 140),
        'opacity' => rand(20, 30) / 100,
        'color' => 'purple'
    ],
    [
        'type' => 'data-flow',
        'x' => rand(5, 95),
        'y' => rand(10, 90),
        'rotation' => rand(-15, 15),
        'size' => rand(90, 130),
        'opacity' => rand(20, 30) / 100,
        'color' => 'green'
    ],
    [
        'type' => 'ai-brain',
        'x' => rand(5, 95),
        'y' => rand(10, 90),
        'rotation' => rand(-15, 15),
        'size' => rand(70, 110),
        'opacity' => rand(20, 30) / 100,
        'color' => 'cyan'
    ],
    [
        'type' => 'machine-learning',
        'x' => rand(5, 95),
        'y' => rand(10, 90),
        'rotation' => rand(-15, 15),
        'size' => rand(85, 125),
        'opacity' => rand(20, 30) / 100,
        'color' => 'indigo'
    ],
    [
        'type' => 'data-visualization',
        'x' => rand(5, 95),
        'y' => rand(10, 90),
        'rotation' => rand(-15, 15),
        'size' => rand(95, 135),
        'opacity' => rand(20, 30) / 100,
        'color' => 'pink'
    ],
    [
        'type' => 'algorithm',
        'x' => rand(5, 95),
        'y' => rand(10, 90),
        'rotation' => rand(-15, 15),
        'size' => rand(75, 115),
        'opacity' => rand(20, 30) / 100,
        'color' => 'yellow'
    ],
    [
        'type' => 'ai-chip',
        'x' => rand(5, 95),
        'y' => rand(10, 90),
        'rotation' => rand(-15, 15),
        'size' => rand(80, 120),
        'opacity' => rand(20, 30) / 100,
        'color' => 'emerald'
    ]
];

function getColorClass($color) {
    $colors = [
        'blue' => 'text-blue-500',
        'purple' => 'text-purple-500',
        'green' => 'text-green-500',
        'cyan' => 'text-cyan-500',
        'indigo' => 'text-indigo-500',
        'pink' => 'text-pink-500',
        'yellow' => 'text-yellow-500',
        'emerald' => 'text-emerald-500'
    ];
    return $colors[$color] ?? 'text-blue-500';
}

function generateNeuralNetwork($size) {
    return '<svg width="' . $size . '" height="' . ($size * 0.6) . '" viewBox="0 0 100 60">
        <g class="text-blue-500" fill="none" stroke="currentColor" stroke-width="1.2">
            <!-- Input layer -->
            <circle cx="10" cy="15" r="3" fill="currentColor" opacity="0.7"/>
            <circle cx="10" cy="30" r="3" fill="currentColor" opacity="0.7"/>
            <circle cx="10" cy="45" r="3" fill="currentColor" opacity="0.7"/>
            
            <!-- Hidden layer -->
            <circle cx="50" cy="10" r="4" fill="currentColor" opacity="0.8"/>
            <circle cx="50" cy="25" r="4" fill="currentColor" opacity="0.8"/>
            <circle cx="50" cy="40" r="4" fill="currentColor" opacity="0.8"/>
            <circle cx="50" cy="55" r="4" fill="currentColor" opacity="0.8"/>
            
            <!-- Output layer -->
            <circle cx="90" cy="20" r="3" fill="currentColor" opacity="0.9"/>
            <circle cx="90" cy="40" r="3" fill="currentColor" opacity="0.9"/>
            
            <!-- Connections -->
            <line x1="13" y1="15" x2="46" y2="10" stroke-dasharray="2,2"/>
            <line x1="13" y1="15" x2="46" y2="25" stroke-dasharray="2,2"/>
            <line x1="13" y1="30" x2="46" y2="25" stroke-dasharray="2,2"/>
            <line x1="13" y1="30" x2="46" y2="40" stroke-dasharray="2,2"/>
            <line x1="13" y1="45" x2="46" y2="40" stroke-dasharray="2,2"/>
            <line x1="13" y1="45" x2="46" y2="55" stroke-dasharray="2,2"/>
            
            <line x1="54" y1="10" x2="87" y2="20" stroke-dasharray="2,2"/>
            <line x1="54" y1="25" x2="87" y2="20" stroke-dasharray="2,2"/>
            <line x1="54" y1="40" x2="87" y2="40" stroke-dasharray="2,2"/>
            <line x1="54" y1="55" x2="87" y2="40" stroke-dasharray="2,2"/>
        </g>
    </svg>';
}

function generateCircuitBoard($size) {
    return '<svg width="' . $size . '" height="' . ($size * 0.7) . '" viewBox="0 0 100 70">
        <g class="text-purple-500" fill="none" stroke="currentColor" stroke-width="1.2">
            <!-- Main board -->
            <rect x="10" y="10" width="80" height="50" rx="3" fill="currentColor" opacity="0.1"/>
            
            <!-- Components -->
            <rect x="20" y="20" width="15" height="10" rx="2" fill="currentColor" opacity="0.3"/>
            <rect x="40" y="20" width="15" height="10" rx="2" fill="currentColor" opacity="0.3"/>
            <rect x="60" y="20" width="15" height="10" rx="2" fill="currentColor" opacity="0.3"/>
            
            <circle cx="25" cy="40" r="4" fill="currentColor" opacity="0.4"/>
            <circle cx="50" cy="40" r="4" fill="currentColor" opacity="0.4"/>
            <circle cx="75" cy="40" r="4" fill="currentColor" opacity="0.4"/>
            
            <!-- Circuit traces -->
            <line x1="35" y1="25" x2="40" y2="25" stroke-width="2"/>
            <line x1="55" y1="25" x2="60" y2="25" stroke-width="2"/>
            <line x1="25" y1="35" x2="25" y2="40" stroke-width="2"/>
            <line x1="50" y1="35" x2="50" y2="40" stroke-width="2"/>
            <line x1="75" y1="35" x2="75" y2="40" stroke-width="2"/>
            
            <!-- AI text -->
            <text x="50" y="60" text-anchor="middle" font-size="8" font-weight="bold" fill="currentColor" opacity="0.6">AI</text>
        </g>
    </svg>';
}

function generateDataFlow($size) {
    return '<svg width="' . $size . '" height="' . ($size * 0.8) . '" viewBox="0 0 100 80">
        <g class="text-green-500" fill="none" stroke="currentColor" stroke-width="1.2">
            <!-- Data nodes -->
            <circle cx="20" cy="20" r="5" fill="currentColor" opacity="0.6"/>
            <circle cx="50" cy="20" r="5" fill="currentColor" opacity="0.7"/>
            <circle cx="80" cy="20" r="5" fill="currentColor" opacity="0.8"/>
            
            <circle cx="20" cy="50" r="5" fill="currentColor" opacity="0.6"/>
            <circle cx="50" cy="50" r="5" fill="currentColor" opacity="0.7"/>
            <circle cx="80" cy="50" r="5" fill="currentColor" opacity="0.8"/>
            
            <circle cx="20" cy="80" r="5" fill="currentColor" opacity="0.6"/>
            <circle cx="50" cy="80" r="5" fill="currentColor" opacity="0.7"/>
            <circle cx="80" cy="80" r="5" fill="currentColor" opacity="0.8"/>
            
            <!-- Flow arrows -->
            <path d="M25 20 L45 20" stroke-width="2" marker-end="url(#arrowhead)"/>
            <path d="M55 20 L75 20" stroke-width="2" marker-end="url(#arrowhead)"/>
            <path d="M25 50 L45 50" stroke-width="2" marker-end="url(#arrowhead)"/>
            <path d="M55 50 L75 50" stroke-width="2" marker-end="url(#arrowhead)"/>
            <path d="M25 80 L45 80" stroke-width="2" marker-end="url(#arrowhead)"/>
            <path d="M55 80 L75 80" stroke-width="2" marker-end="url(#arrowhead)"/>
            
            <!-- Vertical connections -->
            <path d="M20 25 L20 45" stroke-width="2" marker-end="url(#arrowhead)"/>
            <path d="M50 25 L50 45" stroke-width="2" marker-end="url(#arrowhead)"/>
            <path d="M80 25 L80 45" stroke-width="2" marker-end="url(#arrowhead)"/>
            
            <path d="M20 55 L20 75" stroke-width="2" marker-end="url(#arrowhead)"/>
            <path d="M50 55 L50 75" stroke-width="2" marker-end="url(#arrowhead)"/>
            <path d="M80 55 L80 75" stroke-width="2" marker-end="url(#arrowhead)"/>
            
            <!-- Arrow marker definition -->
            <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="currentColor"/>
                </marker>
            </defs>
        </g>
    </svg>';
}

function generateAIBrain($size) {
    return '<svg width="' . $size . '" height="' . ($size * 0.8) . '" viewBox="0 0 100 80">
        <g class="text-cyan-500" fill="none" stroke="currentColor" stroke-width="1.2">
            <!-- Brain outline -->
            <path d="M20 40 Q10 20 30 15 Q50 10 70 15 Q90 20 80 40 Q85 60 70 70 Q50 75 30 70 Q15 60 20 40 Z" 
                  fill="currentColor" opacity="0.1" stroke="currentColor" stroke-width="2"/>
            
            <!-- Neural pathways -->
            <path d="M30 25 Q40 20 50 25 Q60 20 70 25" stroke-width="1.5" stroke-dasharray="2,2"/>
            <path d="M30 35 Q40 30 50 35 Q60 30 70 35" stroke-width="1.5" stroke-dasharray="2,2"/>
            <path d="M30 45 Q40 40 50 45 Q60 40 70 45" stroke-width="1.5" stroke-dasharray="2,2"/>
            <path d="M30 55 Q40 50 50 55 Q60 50 70 55" stroke-width="1.5" stroke-dasharray="2,2"/>
            
            <!-- Synapses -->
            <circle cx="30" cy="25" r="2" fill="currentColor" opacity="0.8"/>
            <circle cx="50" cy="25" r="2" fill="currentColor" opacity="0.8"/>
            <circle cx="70" cy="25" r="2" fill="currentColor" opacity="0.8"/>
            <circle cx="30" cy="35" r="2" fill="currentColor" opacity="0.8"/>
            <circle cx="50" cy="35" r="2" fill="currentColor" opacity="0.8"/>
            <circle cx="70" cy="35" r="2" fill="currentColor" opacity="0.8"/>
            
            <!-- AI text -->
            <text x="50" y="65" text-anchor="middle" font-size="10" font-weight="bold" fill="currentColor" opacity="0.7">AI BRAIN</text>
        </g>
    </svg>';
}

function generateMachineLearning($size) {
    return '<svg width="' . $size . '" height="' . ($size * 0.7) . '" viewBox="0 0 100 70">
        <g class="text-indigo-500" fill="none" stroke="currentColor" stroke-width="1.2">
            <!-- Data points -->
            <circle cx="15" cy="50" r="2" fill="currentColor" opacity="0.6"/>
            <circle cx="25" cy="45" r="2" fill="currentColor" opacity="0.7"/>
            <circle cx="35" cy="40" r="2" fill="currentColor" opacity="0.8"/>
            <circle cx="45" cy="35" r="2" fill="currentColor" opacity="0.9"/>
            <circle cx="55" cy="30" r="2" fill="currentColor" opacity="0.8"/>
            <circle cx="65" cy="25" r="2" fill="currentColor" opacity="0.7"/>
            <circle cx="75" cy="20" r="2" fill="currentColor" opacity="0.6"/>
            <circle cx="85" cy="15" r="2" fill="currentColor" opacity="0.5"/>
            
            <!-- ML curve -->
            <path d="M10 55 Q30 45 50 30 Q70 15 90 10" stroke-width="2" fill="none" stroke-dasharray="3,3"/>
            
            <!-- Algorithm boxes -->
            <rect x="20" y="10" width="20" height="15" rx="2" fill="currentColor" opacity="0.2"/>
            <rect x="60" y="10" width="20" height="15" rx="2" fill="currentColor" opacity="0.2"/>
            
            <text x="30" y="20" text-anchor="middle" font-size="6" fill="currentColor" opacity="0.8">ML</text>
            <text x="70" y="20" text-anchor="middle" font-size="6" fill="currentColor" opacity="0.8">AI</text>
        </g>
    </svg>';
}

function generateDataVisualization($size) {
    return '<svg width="' . $size . '" height="' . ($size * 0.8) . '" viewBox="0 0 100 80">
        <g class="text-pink-500" fill="none" stroke="currentColor" stroke-width="1.2">
            <!-- Chart bars -->
            <rect x="20" y="50" width="8" height="20" fill="currentColor" opacity="0.6"/>
            <rect x="32" y="40" width="8" height="30" fill="currentColor" opacity="0.7"/>
            <rect x="44" y="30" width="8" height="40" fill="currentColor" opacity="0.8"/>
            <rect x="56" y="35" width="8" height="35" fill="currentColor" opacity="0.9"/>
            <rect x="68" y="25" width="8" height="45" fill="currentColor" opacity="0.8"/>
            
            <!-- Chart line -->
            <path d="M20 60 Q32 50 44 40 Q56 35 68 30" stroke-width="2" fill="none" stroke-dasharray="2,2"/>
            
            <!-- Data points on line -->
            <circle cx="20" cy="60" r="2" fill="currentColor" opacity="0.8"/>
            <circle cx="32" cy="50" r="2" fill="currentColor" opacity="0.8"/>
            <circle cx="44" cy="40" r="2" fill="currentColor" opacity="0.8"/>
            <circle cx="56" cy="35" r="2" fill="currentColor" opacity="0.8"/>
            <circle cx="68" cy="30" r="2" fill="currentColor" opacity="0.8"/>
            
            <!-- Grid lines -->
            <line x1="15" y1="70" x2="75" y2="70" stroke-width="1" opacity="0.3"/>
            <line x1="15" y1="60" x2="75" y2="60" stroke-width="1" opacity="0.3"/>
            <line x1="15" y1="50" x2="75" y2="50" stroke-width="1" opacity="0.3"/>
            <line x1="15" y1="40" x2="75" y2="40" stroke-width="1" opacity="0.3"/>
            <line x1="15" y1="30" x2="75" y2="30" stroke-width="1" opacity="0.3"/>
            
            <text x="50" y="15" text-anchor="middle" font-size="8" font-weight="bold" fill="currentColor" opacity="0.7">AI ANALYTICS</text>
        </g>
    </svg>';
}

function generateAlgorithm($size) {
    return '<svg width="' . $size . '" height="' . ($size * 0.9) . '" viewBox="0 0 100 90">
        <g class="text-yellow-500" fill="none" stroke="currentColor" stroke-width="1.2">
            <!-- Algorithm flowchart -->
            <rect x="30" y="10" width="40" height="15" rx="3" fill="currentColor" opacity="0.2"/>
            <text x="50" y="20" text-anchor="middle" font-size="6" fill="currentColor" opacity="0.8">START</text>
            
            <path d="M50 25 L50 35" stroke-width="2" marker-end="url(#arrow)"/>
            
            <rect x="20" y="40" width="30" height="15" rx="3" fill="currentColor" opacity="0.2"/>
            <text x="35" y="50" text-anchor="middle" font-size="6" fill="currentColor" opacity="0.8">INPUT</text>
            
            <rect x="50" y="40" width="30" height="15" rx="3" fill="currentColor" opacity="0.2"/>
            <text x="65" y="50" text-anchor="middle" font-size="6" fill="currentColor" opacity="0.8">PROCESS</text>
            
            <path d="M50 55 L50 65" stroke-width="2" marker-end="url(#arrow)"/>
            
            <rect x="30" y="70" width="40" height="15" rx="3" fill="currentColor" opacity="0.2"/>
            <text x="50" y="80" text-anchor="middle" font-size="6" fill="currentColor" opacity="0.8">OUTPUT</text>
            
            <!-- Arrow marker definition -->
            <defs>
                <marker id="arrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="currentColor"/>
                </marker>
            </defs>
        </g>
    </svg>';
}

function generateAIChip($size) {
    return '<svg width="' . $size . '" height="' . ($size * 0.7) . '" viewBox="0 0 100 70">
        <g class="text-emerald-500" fill="none" stroke="currentColor" stroke-width="1.2">
            <!-- Chip body -->
            <rect x="20" y="20" width="60" height="30" rx="3" fill="currentColor" opacity="0.1"/>
            
            <!-- Circuit patterns -->
            <rect x="25" y="25" width="15" height="8" rx="1" fill="currentColor" opacity="0.3"/>
            <rect x="45" y="25" width="15" height="8" rx="1" fill="currentColor" opacity="0.3"/>
            <rect x="25" y="37" width="15" height="8" rx="1" fill="currentColor" opacity="0.3"/>
            <rect x="45" y="37" width="15" height="8" rx="1" fill="currentColor" opacity="0.3"/>
            
            <!-- Pins -->
            <rect x="15" y="25" width="3" height="4" fill="currentColor" opacity="0.6"/>
            <rect x="15" y="35" width="3" height="4" fill="currentColor" opacity="0.6"/>
            <rect x="15" y="45" width="3" height="4" fill="currentColor" opacity="0.6"/>
            
            <rect x="82" y="25" width="3" height="4" fill="currentColor" opacity="0.6"/>
            <rect x="82" y="35" width="3" height="4" fill="currentColor" opacity="0.6"/>
            <rect x="82" y="45" width="3" height="4" fill="currentColor" opacity="0.6"/>
            
            <!-- AI text -->
            <text x="50" y="60" text-anchor="middle" font-size="8" font-weight="bold" fill="currentColor" opacity="0.7">AI CHIP</text>
        </g>
    </svg>';
}

// Generate the doodles
foreach ($doodles as $doodle) {
    $colorClass = getColorClass($doodle['color']);
    $svg = '';
    
    switch ($doodle['type']) {
        case 'neural-network':
            $svg = generateNeuralNetwork($doodle['size']);
            break;
        case 'circuit-board':
            $svg = generateCircuitBoard($doodle['size']);
            break;
        case 'data-flow':
            $svg = generateDataFlow($doodle['size']);
            break;
        case 'ai-brain':
            $svg = generateAIBrain($doodle['size']);
            break;
        case 'machine-learning':
            $svg = generateMachineLearning($doodle['size']);
            break;
        case 'data-visualization':
            $svg = generateDataVisualization($doodle['size']);
            break;
        case 'algorithm':
            $svg = generateAlgorithm($doodle['size']);
            break;
        case 'ai-chip':
            $svg = generateAIChip($doodle['size']);
            break;
    }
    
    echo '<div class="absolute ' . $colorClass . '" style="top:' . $doodle['y'] . '%;left:' . $doodle['x'] . '%;transform:rotate(' . $doodle['rotation'] . 'deg);opacity:' . $doodle['opacity'] . '">';
    echo $svg;
    echo '</div>';
}
?>
