# @deadbot/types

TypeScript type definitions for Deadbot data structures.

## Installation

```bash
npm install @deadbot/types
```

## Usage

Import the types you need:

```typescript
import { HeroData, ItemData, ConvertedAbility } from '@deadbot/types';

// Example: Working with hero data
const hero: HeroData = {
  // ... hero data
};

// Example: Working with item data
const item: ItemData = {
  // ... item data
};

// Example: Working with ability data
const ability: ConvertedAbility = {
  // ... ability data
};
```

## Type Definitions

### Hero Types

- `HeroData`: Complete hero data structure
- `WeaponStats`: Weapon statistics
- `SpiritScaling`: Spirit scaling values
- `CollisionData`: Physical collision properties
- `MovementData`: Movement-related properties
- `VisualsData`: Visual appearance settings
- `ItemSlotData`: Item slot configuration
- `PurchaseBonus`: Purchase bonus configuration
- `StatsDisplayData`: Stats display configuration

### Item Types

- `ItemData`: Complete item data structure
- `ItemComponent`: Item component information
- `ItemTooltipSection`: Item tooltip section
- `ItemTooltipAbilityProperty`: Item tooltip ability property
- `ItemTooltipImportantProperty`: Important property in item tooltip

### Ability Types

- `ConvertedAbility`: Converted ability data structure
- `AbilityStats`: Base ability statistics
- `AbilitySpiritScaling`: Spirit scaling values for abilities
- `AbilityTooltipSection`: Ability tooltip section
- `AbilityTooltipProperty`: Property displayed in ability tooltip
- `DataProperty`: Generic data property
- `ScaleFunction`: Scaling function for abilities

## Contributing

If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

MIT
