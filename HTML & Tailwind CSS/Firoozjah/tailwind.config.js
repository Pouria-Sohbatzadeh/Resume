/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      'yekan' : "Byekan"
    },
    extend: {
      backgroundImage: {
        'custom-gradient-green': 'linear-gradient(343deg, #18CA5F -2.78%, #64DA93 57.19%)',
        'custom-gradient-purple': 'linear-gradient(343deg, #A218C5 -2.78%, #CA6DEB 57.19%)',
        'custom-gradient-orange': 'linear-gradient(343deg, #FD9931 -2.78%, #FAB953 57.19%)',
        'custom-gradient-blue': 'linear-gradient(343deg, #29A0E3 -2.78%, #22C3F0 57.19%)',
        'custom-gradient-red': 'linear-gradient(343deg, #EA2548 -2.78%, #FF5775 57.19%)',
      },
      divideWidth: {
        '1': '1px', // برای استفاده در `divide-y-1` یا `divide-x-1`
      },
      colors: {
        'primary-red' : "#FF5775",
        'primary-blue' : "#57A4FF",
        'second-blue' : "#2884F0",
        'primary-green' : "#64DA93",
        'second-green' : "#3DB66D",
        'primary-yellow' : "#F3BA60",
        'primary-pink' : "#FF5775",
        'placeholder' : "#AEAEAE",
        'border-color' : "#E6E6E6",
        'input' : "#F4F4F4",
        'dark' : "#505050",
        'second-dark' : "#505050",
        'line-grey' : "#E3E3E3",
        'line-greyII' : "#D1D1D1",
        'write-grey' : "#505050",
        'write-dark': "#46454B",
        'headline-blue' : "#0085FF",
        'start_red' : "#F93659",
        'faded' : "#828282",
        'organize_orange' : "#FD9931",
        'lightText' : "#6B6B6B",
        'special_red' : "#F00"
        
      },
    },
  },
  plugins: [],
}

