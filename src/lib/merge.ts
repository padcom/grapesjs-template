// eslint-disable-next-line complexity
function isPlainObject(value: any) {
  if (typeof value !== 'object' || value === null) {
    return false
  }

  const prototype = Object.getPrototypeOf(value)

  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null)
    && !(Symbol.toStringTag in value) && !(Symbol.iterator in value)
}

const disallowedKeys = new Set([
  '__proto__',
  'prototype',
  'constructor',
])

// eslint-disable-next-line complexity
export function merge(destination: any, source: any) {
  if (!isPlainObject(source)) {
    return destination
  }

  if (!destination) {
    destination = {}
  }

  for (const [sourceKey, sourceValue] of Object.entries(source)) {
    if (disallowedKeys.has(sourceKey)) {
      continue
    }

    const destinationValue = destination[sourceKey]

    if (isPlainObject(destinationValue) && isPlainObject(sourceValue)) {
      destination[sourceKey] = merge(destinationValue, sourceValue) // Merge plain objects recursively
    } else if (sourceValue === undefined) {
      continue // Skip undefined values in source
    } else if (isPlainObject(sourceValue)) {
      destination[sourceKey] = merge({}, sourceValue) // Clone plain objects
    } else if (Array.isArray(sourceValue)) {
      destination[sourceKey] = [...sourceValue] // Clone arrays
    } else {
      destination[sourceKey] = sourceValue // Assign other types
    }
  }

  return destination
}
