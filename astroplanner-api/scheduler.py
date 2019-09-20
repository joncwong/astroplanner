from astropy.coordinates import SkyCoord
from astroplan import FixedTarget

coordinates = SkyCoord('19h50m47.6s', '+08d52m12.0s', frame='icrs')
altair = FixedTarget(name='Altair', coord=coordinates)

