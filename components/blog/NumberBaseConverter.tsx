'use client';

import { useState, useMemo } from 'react';

export function NumberBaseConverter() {
  const [inputValue, setInputValue] = useState('10');

  // Parse input value to decimal
  const parseInput = (value: string): number | null => {
    if (!value || value.trim() === '') return null;

    try {
      // Try to parse with automatic base detection
      // parseInt with base 0 auto-detects: 0b prefix = binary, 0x prefix = hex, else decimal
      const parsed = parseInt(value, 0);
      return isNaN(parsed) ? null : parsed;
    } catch {
      return null;
    }
  };

  const decimalValue = useMemo(() => parseInput(inputValue), [inputValue]);

  // Reactive conversions using useMemo
  const binaryOutput = useMemo(
    () => (decimalValue !== null ? decimalValue.toString(2) : ''),
    [decimalValue]
  );
  const decimalOutput = useMemo(
    () => (decimalValue !== null ? decimalValue.toString(10) : ''),
    [decimalValue]
  );
  const hexOutput = useMemo(
    () => (decimalValue !== null ? decimalValue.toString(16).toUpperCase() : ''),
    [decimalValue]
  );

  // Increment/decrement functions
  const modifyValue = (delta: number) => {
    if (decimalValue !== null) {
      const newValue = Math.max(0, decimalValue + delta);
      setInputValue(newValue.toString(10));
    }
  };

  const increment = () => modifyValue(1);
  const decrement = () => modifyValue(-1);

  const isInvalid = decimalValue === null && inputValue.trim() !== '';
  const isEmpty = inputValue.trim() === '';

  return (
    <div className="not-prose base-converter bg-gradient-to-br from-gruvbox-light-bg1 to-gruvbox-light-bg2 dark:from-gruvbox-dark-bg1 dark:to-gruvbox-dark-bg2 rounded-xl p-8 my-8 shadow-lg border-2 border-gruvbox-light-bg3 dark:border-gruvbox-dark-bg3">
      {/* Header */}
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-gruvbox-light-fg0 dark:text-gruvbox-dark-fg0 mb-2">
          🔢 Number Base Converter
        </h3>
        <p className="text-sm text-gruvbox-light-fg2 dark:text-gruvbox-dark-fg2 max-w-2xl mx-auto">
          Enter any number below. Use +/- buttons to see how counting works in different bases.
        </p>
      </div>

      {/* Input Field */}
      <div className="mb-8">
        <label className="block text-center text-gruvbox-light-fg1 dark:text-gruvbox-dark-fg1 font-semibold mb-3 text-sm uppercase tracking-wide">
          Enter a Number
        </label>
        <div className="max-w-md mx-auto">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className={`w-full px-6 py-4 rounded-lg font-mono text-xl text-center
              bg-gruvbox-light-bg0 dark:bg-gruvbox-dark-bg0
              text-gruvbox-light-fg0 dark:text-gruvbox-dark-fg0
              border-2 ${
                isInvalid
                  ? 'border-gruvbox-light-red dark:border-gruvbox-dark-red'
                  : 'border-gruvbox-light-blue dark:border-gruvbox-dark-blue'
              }
              focus:outline-none focus:ring-2 focus:ring-gruvbox-light-aqua dark:focus:ring-gruvbox-dark-aqua
              transition-all duration-200 shadow-md`}
            placeholder="10, 0b1010, or 0xA"
          />
          <p className="text-xs text-center mt-2 text-gruvbox-light-fg3 dark:text-gruvbox-dark-fg3">
            Tip:{' '}
            <code className="px-1 py-0.5 rounded bg-gruvbox-light-bg3 dark:bg-gruvbox-dark-bg3">
              0b
            </code>{' '}
            for binary,{' '}
            <code className="px-1 py-0.5 rounded bg-gruvbox-light-bg3 dark:bg-gruvbox-dark-bg3">
              0x
            </code>{' '}
            for hex
          </p>
        </div>
        {isInvalid && (
          <p className="text-sm text-gruvbox-light-red dark:text-gruvbox-dark-red mt-2 text-center font-medium">
            ⚠️ Invalid number format
          </p>
        )}
      </div>

      {/* Conversion Display */}
      {decimalValue !== null && (
        <div className="grid md:grid-cols-3 gap-6">
          {/* Binary Card */}
          <BaseCard
            label="Binary"
            baseLabel="Base 2"
            output={binaryOutput}
            color="purple"
            onIncrement={increment}
            onDecrement={decrement}
            canDecrement={decimalValue > 0}
            extraInfo={`${binaryOutput.length} bit${binaryOutput.length !== 1 ? 's' : ''}`}
          />

          {/* Decimal Card */}
          <BaseCard
            label="Decimal"
            baseLabel="Base 10"
            output={decimalOutput}
            color="blue"
            onIncrement={increment}
            onDecrement={decrement}
            canDecrement={decimalValue > 0}
            textSize="text-3xl"
          />

          {/* Hexadecimal Card */}
          <BaseCard
            label="Hexadecimal"
            baseLabel="Base 16"
            output={hexOutput}
            color="orange"
            onIncrement={increment}
            onDecrement={decrement}
            canDecrement={decimalValue > 0}
            textSize="text-3xl"
            extraInfo={`0x${hexOutput}`}
          />
        </div>
      )}

      {/* Quick Examples */}
      {decimalValue !== null && (
        <div className="mt-8 pt-6 border-t border-gruvbox-light-bg3 dark:border-gruvbox-dark-bg3">
          <p className="text-xs text-center text-gruvbox-light-fg3 dark:text-gruvbox-dark-fg3 mb-3 uppercase tracking-wide font-semibold">
            Quick Examples - Click to Try
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {['0', '15', '255', '0b1111', '0xFF'].map((example) => (
              <button
                key={example}
                onClick={() => setInputValue(example)}
                className={`px-3 py-1 rounded-md text-sm font-mono
                  bg-gruvbox-light-bg2 dark:bg-gruvbox-dark-bg2
                  text-gruvbox-light-fg1 dark:text-gruvbox-dark-fg1
                  ${
                    example.startsWith('0b')
                      ? 'hover:bg-gruvbox-light-purple dark:hover:bg-gruvbox-dark-purple'
                      : example.startsWith('0x')
                      ? 'hover:bg-gruvbox-light-orange dark:hover:bg-gruvbox-dark-orange'
                      : 'hover:bg-gruvbox-light-blue dark:hover:bg-gruvbox-dark-blue'
                  }
                  hover:text-gruvbox-light-bg0 dark:hover:text-gruvbox-dark-bg0
                  transition-colors duration-200`}
              >
                {example}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Empty state */}
      {isEmpty && (
        <div className="text-center py-16 bg-gruvbox-light-bg0 dark:bg-gruvbox-dark-bg0 rounded-lg border-2 border-dashed border-gruvbox-light-bg3 dark:border-gruvbox-dark-bg3">
          <div className="text-6xl mb-4">🔢</div>
          <p className="text-gruvbox-light-fg2 dark:text-gruvbox-dark-fg2 mb-2">
            Enter a number above to see conversions
          </p>
          <p className="text-sm text-gruvbox-light-fg3 dark:text-gruvbox-dark-fg3">
            Try: 10, 0b1010, or 0xA
          </p>
        </div>
      )}
    </div>
  );
}

// BaseCard subcomponent
interface BaseCardProps {
  label: string;
  baseLabel: string;
  output: string;
  color: 'purple' | 'blue' | 'orange';
  onIncrement: () => void;
  onDecrement: () => void;
  canDecrement: boolean;
  extraInfo?: string;
  textSize?: string;
}

function BaseCard({
  label,
  baseLabel,
  output,
  color,
  onIncrement,
  onDecrement,
  canDecrement,
  extraInfo,
  textSize = 'text-2xl',
}: BaseCardProps) {
  const colorClasses = {
    purple: {
      border: 'border-gruvbox-light-purple dark:border-gruvbox-dark-purple',
      badge: 'bg-gruvbox-light-purple dark:bg-gruvbox-dark-purple',
      text: 'text-gruvbox-light-purple dark:text-gruvbox-dark-purple',
      hover:
        'hover:bg-gruvbox-light-purple hover:text-gruvbox-light-bg0 dark:hover:bg-gruvbox-dark-purple dark:hover:text-gruvbox-dark-bg0',
    },
    blue: {
      border: 'border-gruvbox-light-blue dark:border-gruvbox-dark-blue',
      badge: 'bg-gruvbox-light-blue dark:bg-gruvbox-dark-blue',
      text: 'text-gruvbox-light-blue dark:text-gruvbox-dark-blue',
      hover:
        'hover:bg-gruvbox-light-blue hover:text-gruvbox-light-bg0 dark:hover:bg-gruvbox-dark-blue dark:hover:text-gruvbox-dark-bg0',
    },
    orange: {
      border: 'border-gruvbox-light-orange dark:border-gruvbox-dark-orange',
      badge: 'bg-gruvbox-light-orange dark:bg-gruvbox-dark-orange',
      text: 'text-gruvbox-light-orange dark:text-gruvbox-dark-orange',
      hover:
        'hover:bg-gruvbox-light-orange hover:text-gruvbox-light-bg0 dark:hover:bg-gruvbox-dark-orange dark:hover:text-gruvbox-dark-bg0',
    },
  };

  const colors = colorClasses[color];

  return (
    <div
      className={`bg-gruvbox-light-bg0 dark:bg-gruvbox-dark-bg0 rounded-lg p-6 border-2 ${colors.border} shadow-md hover:shadow-lg transition-shadow duration-200`}
    >
      <div className="text-center mb-4">
        <div
          className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${colors.badge} text-gruvbox-light-bg0 dark:text-gruvbox-dark-bg0 mb-2`}
        >
          {label}
        </div>
        <div className="text-xs text-gruvbox-light-fg3 dark:text-gruvbox-dark-fg3">
          {baseLabel}
        </div>
      </div>

      <div className="bg-gruvbox-light-bg2 dark:bg-gruvbox-dark-bg2 rounded-lg p-4 mb-4 border border-gruvbox-light-bg3 dark:border-gruvbox-dark-bg3">
        <div className={`${textSize} font-mono font-bold text-center break-all ${colors.text}`}>
          {output}
        </div>
        {extraInfo && (
          <div className="text-xs text-center mt-2 text-gruvbox-light-fg3 dark:text-gruvbox-dark-fg3">
            {extraInfo}
          </div>
        )}
      </div>

      <div className="flex gap-2">
        <button
          onClick={onDecrement}
          disabled={!canDecrement}
          className={`flex-1 px-4 py-2 rounded-lg font-bold
            bg-gruvbox-light-bg2 dark:bg-gruvbox-dark-bg2
            text-gruvbox-light-fg0 dark:text-gruvbox-dark-fg0
            ${colors.hover}
            disabled:opacity-30 disabled:cursor-not-allowed
            transition-all duration-200 border border-gruvbox-light-bg3 dark:border-gruvbox-dark-bg3`}
        >
          −
        </button>
        <button
          onClick={onIncrement}
          className={`flex-1 px-4 py-2 rounded-lg font-bold
            bg-gruvbox-light-bg2 dark:bg-gruvbox-dark-bg2
            text-gruvbox-light-fg0 dark:text-gruvbox-dark-fg0
            ${colors.hover}
            transition-all duration-200 border border-gruvbox-light-bg3 dark:border-gruvbox-dark-bg3`}
        >
          +
        </button>
      </div>
    </div>
  );
}
