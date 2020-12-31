export default function stringifyHealth(oPerson) {
  let healthString = '';

  if (oPerson.health > 50) {
    healthString = 'healthy';
  } else if (oPerson.health >= 15) {
    healthString = 'wounded';
  } else {
    healthString = 'critical';
  }

  return healthString;
}
