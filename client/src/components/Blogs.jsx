import React from 'react';

const Blogs = () => {
  return (
    <div>
    
      <section className="bg-[url('https://www.theedublogger.com/files/2020/11/Class-blogs-01.png')] bg-cover bg-center h-72 flex items-center justify-center">
        <div className="bg-gray-900 bg-opacity-50 p-8 rounded text-center">
          <h1 className="text-4xl font-bold text-white">Stay Productive with Taskify</h1>
          <p className="text-gray-300 mt-2">Insights, tips, and tricks to manage your tasks effectively.</p>
        </div>
      </section>

      
      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-5">Latest Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
     
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              className="w-full h-48 object-cover"
              src="https://coamplifi.com/wp-content/uploads/2022/01/coamplifi_timemgmt.jpg"
              alt="Blog Image"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">5 Tips for Effective Task Scheduling</h3>
              <p className="text-gray-600 text-sm">
                Discover how to prioritize and schedule tasks to maximize productivity.
              </p>
              <a
                href="#"
                className="text-blue-500 font-semibold hover:underline mt-4 block"
              >
                Read More
              </a>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              className="w-full h-48 object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaStug8JF50LOoWSw1eQ-77BF3Sl-G9AY0dg&s"
              alt="Blog Image"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">
                Time Blocking: A Game-Changer for Your Schedule
              </h3>
              <p className="text-gray-600 text-sm">
                Learn how to use time blocking to plan your day effectively.
              </p>
              <a
                href="#"
                className="text-blue-500 font-semibold hover:underline mt-4 block"
              >
                Read More
              </a>
            </div>
          </div>

          
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              className="w-full h-48 object-cover"
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDw8PDw8PDw0PDxAPDw8PDw8NDQ8NFhEWFhURFRUYHiggGBolGxUWITEhJSkrLi4uFx8zODMuNygtLisBCgoKDg0OGhAQGC0lHSUtKy0tLS0tLSswLS0tLS0tLS0tLS0tKy0rLSstLS0rLSstLystLS0tKy0rKy0rLS0tK//AABEIAKgBLAMBEQACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAQYCBAUHAwj/xABDEAABAwIDBAUJBgQEBwAAAAABAAIDBBESITEFBhNBM1FxcpEUIjJSYYGhsdEHI0JiksFTosLwFZOy4RYkJXOC0vH/xAAbAQEAAQUBAAAAAAAAAAAAAAAAAQIEBQYHA//EADoRAAIBAQQHBgUEAQMFAAAAAAABAgMEESExBRIyQVFhcROBkaGxwQYiQtHwFDNS4ZIVU2IkcoKy8f/aAAwDAQACEQMRAD8A21tRoYQBAEAQBAEAQBAEBCAIAgCAlAEBCAlAEAQEICUAQEICUBCAIAgJQEICUAQBAEAQEICUBCAlAEAQBAEAQBAQgJQBAQgJQEICUAQBAQgCAlAQgCAICUAQBAQgCAICUBCAlAQgCAlAEBCAIAgJQBAEBCAICUBCAIBdQCVICAhAEBKAhASgCAhAEAQBAEAQBAEAQBAEJCEBAEAQEoAgCAICEAQkIQEAQBAEBKAICEBxN5610TWW0vi7zwRZvjYqwttSUbkuvgZXRlGM9Zvp4n22HXzStAkaC5oJe8ZC5Js0NA6vkq7NXnUwa6s8rbZadHGLzyXq7zqq8MeEACA2Nxd0KSuoXVs7qoSz1VU5skFTURkQtmcxjQ1pw2GE8lrs609eTUnm95uNKzU+yjGUVktyO3PuBTZ8Kumicf4oY7P+UrxU5J3psuHThJXOKfcV3e3YVfsylkrBUUlVTxGMYDFNDUOxyNjaA4OcCbuHxV7Tt9VXJpMxtbRNCTck2vQgrNmsBAEAQBAEAQBAEAQBAEAQBAEAQEoCEAQBAEAQkIQSgIQEgKATgPUfApeidV8D41VU0YQ3MhtncgHXP+yxdo0lCk3GOL8jbNF/Cte2RjVrPUhdw+Z927q/A1HVL+u3YPqsZPSVol9V3RL+zbaPwpoymsabk+Lk/ZpeQbUvHO/aPophpO0Rzd/Vfa4pr/Cejaq+WDi+MZP0levI5kczK2qDX9DBcRsztLP+J1xyCyNO0QtM4qphhlxfX2NNtWjathp1JWe+cVK5yuyS5Y78G8uhYIaYMFmMwi97AHVZKEYQV0TXqkqlR3yvbPphPUfBV3o87nwMUIPjWz8OKWQmwjje+/daT+ypnLVi3wK6cNeajxaRZdyoIWQbBp/K5oKiOh8q8kZxWxVDJWF54lvNJBxkB1zk4gCxI1k3gvAc7QSNd7MTR8LE/FQSUr7W5HCipKezb1O0qZjgMhwmYpXHxYF60I61WK5lva56lCb5MrpWymlhAEAQBAEAQBAEAQBAEAQGc7QHEDRUxd6xK6iSk0jBVFAQBAfSdoDiBpl8lTF3orqJKTSPmqigIAgCAlAQgJQEID4VU5aLAkE/ALFaTtXZx7OOb8l/Zt3wpohWqs7RVV8IPBcZZ+Ec7uLXM292t35K6QgHBCy3Ekte1/wtHN3y8AcBCGsdCttuhZo3vGTyXu+R6HRbqUMQA4DJDzdMOK4nrzyHuAXuqcVuNZq6StNR367XTAqn2k0VLGyCmpYGN2jWycOHhXYIoh0szmjIgDIZXuctFUqcXjcU/wCpWqMXFTePHHzzKpVbsybNLY5B6TbxyDRzeY9jgTmP2srepfrXs2HRToyoJU92DX5x8zappy4Zk3GuZWxaPtPbU7pbSz58Gc7+JtFfoLSpU/253tcnvj03rk7tx9iVkDWrzKS1mW9XPtxO/wBlEb72VSuuXT3Zxt63kUU4aLvkaImgal0jwwD+ZeFrlq0ZP8xLrR8Na0wXO/wxPWqOnqI6rAaanNHDSMip6jLykv8ANDotbhuRysB5rTd17N19m3nScR+JjrdTS+3xACgk89+01+Kt2RA3JjG1lU9uV/QbGw5ZaucrywxvrLleY7Ss9WzNcbl5nLWeNUNbaIlMT+C5rJci1zvRycCQcjqLj3q3tVR06Uprd9y8sFBV7RCk1nf6M1dlzVXEfHUtjNmNeyWLEGG5Iw588j4e0K1sNtdobT3F/pbRTsSi9z71v34cHgdNZIwgQBAEAQBAEAQBASD/AHqoJMhKfy/pYf2UaqKtd/iRPHd+X/Lj+ijUX42T2kuXgvsfSaUhxHm8vwR9Q9iiMU1f7sqnNqV2HgvsfIyk+r+hn0VWqijXf4kYk3/sKSlu8hSQEAQBASgCAhAEBz6k+cf75f8A1appCblaJcsPA7D8NUFS0ZRS3rWf/k7/AEuXceubq0Qgo6dgFnOjbI/2yPGI/O3uUQV0UYa31nVtE5PjcuiwKDvVvVPJLKGSvhponOaBG4sc4NuC9xGZvbTsXjKbbuRn7JYKNGj2lSKbuvd6vu34Lkc37O9oPdtBlVV4pX1DRTwOlc58kEV7x2J6ydPzXXpr3NQ/LzGTsDrUZ2q7VbxUUrror3axPRd+qJstDKcsUNpmnqsbO8Wk/BTUV8Tw0VVdO0xW54P28zzGimLH5EjFlkSPavXRskrQk9969/YvPiui56NlNZwafnc/J+R0eO/13/qK2bUjwOU9pP8Ak/EGZ/rO/UU1Y8B2kuL8Tk7bnwuojJjMDa+lfUOaySbBAx+NxLWgn8IGnNWduT7K6K3mR0VJdvfOW55l62VvJsTjVM8W1I2yVbo3SMnm8nDCwWAa2QNcNedzoBYZLC5Gzp35FrpZ2yC8M8cg643tkB993KCTzTfOTibdkzv5Ns6CEi+QfJK+QntsG+CyOjY/PJ8jC6andTjHi/T/AOmuswa6PivKtSVWm6byZcWS0ys1aNaKxi78fBrvRuPow2AzPmYS5zGwxM854s0F/EN7iwd8R2nB2WLsleSWKy4G91qEtN2amn8j2r7r0lirt2tfxwuu34mldZaNspvPAwVq+FbdSV9O6a5O5+D9myVdJpq9GuVKcqcnCaaazTwYUlBnDGXl4aReON0r7kCzG2ufiPFeE7TShLVlJXl/S0Za6tJVoUm4PJ3Z8lvfcQY3ANJBs++A29KxsbdeeS9YzjLJlpOnOm0pxab4q7yMVUeYQBQDMSexvvaFGqVKXJeBlxj6rP0BRqc34lXacl4DjflZ+gJqc34jtOS8CDL+Vn6Qp1eZGvyXgYueTrbwAUpXFLbeZipAQgIAgCAIAgCAIAgOdUjzj/fJappCGraJ+Pidh+G6yq6Motblq/4to9e3WrRPR07wblsbY3+yRgwn5X94UQd8UYW30nStE4vjeujxKDvPuzUQzyPjifLBI9z2OjaZC3Eb4XAZi3XpovCcGngbFYdIUqlNRlJKSVzvw70Z7s7oyVDw6qhLaQA4mStLTMbZMwnPDzJ93NTTg772eWk7fSVJ04O9vDDcjsz7nbDY7A/Z9KHc/ujbxXjX0lZqFTs6krn0ZrkaM5LWSPjWbq7CjjfJ5DRnC02AZmXcm+8q6slejaqip0ppvlwPC0ydClKpNYL8XmVljbADqAHgtuNFx3koAgMJYmvye1rx1OaHD4qGk8yqMnHJ3HPk3foyb+TRNcMw6NvBcD1gssQvGVmpPOKLiNttEcpv19TYotnRwukczGXyYcbpJJJnkNFmjE8k2AKmlQhSv1FmU17VVr3do77jbXsW4QHxjOZ7fZphBWErfuS6s6/oh/8AQ0P+yH/og51rkcjY9VrA/uqNxe/Nr334cOf5n3cz6MeDp7VkbE/laND+MYRVopTWbi0+5/2ZFXpp7LDPuLUAOMVSy8jML2Pa6O7btcWFwvcXa3lyWqV4udSU082zqmj9JUqFnpUZ038iSvWOKV192HPfvNH/AAbadNJBJ5PxW0wtGIi17LYnPuQ04icTidOQXilOORfytFhtEZRcrnJ3/MsslhfgsFxwONLVPii4MkbmTGbiF8rML8AZhDLGx1LifcveFvtEPq8Twq/DujbS24wSj/wd2OOOGGW7LkbUtXTudVObdkbQPJmXs6T7xrQbH8uJxCu4aWktpX+5g6/wZF6vZzabWKuvUXdxWN27zvPk03zWdjJSipLfiaHVpOlUlTlnFtPqncyVUeYQkIQEAQkIQEAQBAEAQBAEAQBAaW0G2If+H0XezqPZy94WF0tZ20qq3YP2N5+DdJRhKVkm8/mj13rwSfczo7tbwyULyQMcLyOJFe1z6zTyd8/C2FhPVN2t1hhao44SWT9nyPRKLeuhlbfyhkZ5tmPBcPZnkfcSvdVIvea1V0baabu1G+mJhtDe6hhbfjNmdyZCRKSe0eaPeUdSKKqOjLTUd2rcuLw/s4dBVVVaZqqVrY6UNIhZbz7tvbCeY6yfcFidKWaFehKpNYxTaft0/EXlenQsurRg75739/bzOZvNs+oZM17iDRhtoA2+Uh9IyD17CwOlibWzWd0DYaNnv1OHe79/5xNX0/bL7NGnGLxfzPpkujz7s2clbMaeEAQBCQgPtR0skzxHE0ve69gLDIakk6BUTnGEdaTwK6VKdWahBXs+cjC1xY8FjwSC1wIcCOVuteFptUKFLtHit128u7Bo+pbLR2EfleLd+5LlveOXsZGLtWG/1qo3spLxNyo/CVli06k5S5YJP38zSqamOFjpZXNja30nONh2e32Bejlf8zZtEI0rPSSV0YxSXcsir1m/lK0OwRyzX0yEbDla1zn8Oa83URZT0rRV9yb8i205YWMez0HsbIOxwuFkNFOUqTlLO/0/GaV8VV+0tUIrJQT/AMm/ZI6Gxqfi1MDOTpW37rTid8AVe156lOUuRgLLT7SvCPNeWPsXna1M2aeIcd8TmEAxtFmyXINi61xy0t7cjZa4bmbjTKZ7h7TDfNrXNdYAWsRqDdQSadHtGeQ1LamlDIogXMLwbStubZG40HxQlNp3o1ZtjbOnikldStjEYc5xjJh0bc+gQD7woVJTko3Zl0tKWmhFy13clfjjl1KI1bUklgjnMpSk3KWbxfVhSQEAQBAEAQkIQEAQBAEAQBASgCAxc0EEEAgixBzBChpNXPIqhOUJKUXc1inwOZNSyR+gDJH6t/vGjqHrD4rX7VoyUXrUsVw3r7nRdEfFlOpFU7W9WXHc/s+uHB7jX8sj0JLTzDgQQsW4tO5m4QtFOa1ovAmOthxNDnOLS5ofw2Pe8MuMRDQLmwuclF12LyKKtpjCDksbkXH/AIvpcOASVDYwA0MFDtAMa0aNA4Wi1ytQt1XWUq8bnu1sLuGRrHaQv1nFt8biJt9qN7XRSzSljhhc00NdcDkR91qMiFkLBPSFCrCTqwcVdhesuWBa2qnQrUpQcXijksdcA55gHMEHTmDouknPOpKAIAgABJsASTkAMyT1BQTmXjZGx6mlha6IQ8eWSLj8UOdwqYG7msDfSfbK1wLm+eGxwVstHayuWS8+ZtWjrG6EL5bTz5cvubu3N3YK0sm9Goja5scoJ9F1rtc0a6a6jO2pBtlJOOpLFenNcy/ScJqrTwkvNcHvuPJd9duP2WHxSQubUklsAfhwSNGs4sc4+rQk5WFivCNjjFa0pX8Et/Xh7+ZkKmmKkn2dKFz3t5LlHi+eS3p5HldftGapZimlfI5hI843ADje4Gg5hev03cC0qVqlSXzybOaHEcyoKD23YTbUlKDY2p4RcadGFsdnio0opcPU022VJVK85Se+7uWC8Ei4bj0+Kpc/lFG4/wDk4ho+GJW+kJXUruLLvRFPWruXBev4yzxSAzPc+LCWY3h5xNOFuQuDkclhTZjU2NWU88c08TpGgAxuMjQcLncxh15KCT608VTHTP4cwqpy4cMvc2JhA1b6Pm6dR1QHz27NJHs5/EDRNJaNwY3C27nWNh3QVd2KGtWXLEsNJ1NSzS54eP8ARQFnzUwhAQBCQhAQBAEAQBAEAQBAEAQEoCEAQGMjQRmAe0XUasZP5leVRqzpp6kmuja9C0QxNaPNa1uX4WhvyXCrVOUqslJt4v1OqQbcVfwR9Lq3Kis7UP37+0f6QsvY8ofm8t6u8+YXZ3mcuWQQqCEBAS1xBBBIINwQbEEaEHkoavJTuxRdd3d6g/DFUkB+jJjk13sf1H26H2c8TarDd81PLh9jYLDpRSup1njufHrzLLKwi7mC7rE4L4WvPVfl2rGGbPHfto3ppjQR0NRDTzbWdhdI1jnObs91g4kOyOIggAaEXJysCB41s3Zs0zJ3sbeOKJz5XHJoA84D2nLTtXrTpSmm1klieFWvCnKMZPFu5HPXke57LulPxKCld1RBn6CWf0rYrLLWoxfL0NPt0NW0TXO/xxLBQbQmpyXQyFhdbFYNIcBpcEe0r0qUoVFdNXnjRtFSi76crjt0++VQ3KSOKQdhjd4i4+Cs5aOpvZbXmZGnpistqKfl9/Q34N6aR7SyWB8QcQXYA1zSRzJaQT4K2no6otlp+Re09M0ntxa8/wC/I3m1VFOxkcdSxmEuIa84CSesOsSrWdlrRzi/X0L2nbrPU2Zrvw9Tm79TBsdNA03Gb8jya0Nafi7wV7o2GMpdxjdNVFdCC5v29yoLLGBCEBCQhAQkIQEAQBAEAQBAEAQBAEBKAhAQ7Q9ilZkS2WWoaDsXBrR+7Pq/U6tT2F0QXiVlZ2n08neHyCzFkyh+by2qbzBdmeZy9ZH38jk9Q/BY16YsKdzrIvP0No/gx5HL6h+Cj/WbB/vRH6G0fwZ8JPNJa7Jw1HNVrStjeVVD9DaP4MLIFoLIDbr99qrZ9BUOY0SujjAgLz0Ti4NufWaL3serqWMt1mjqupHB7+ZmtF22euqMsU8uX9H59qqh8r3yyOc+WRznve43c97jcuJ5kkrEGxHseyKKLyGOKJobHLTgn8xkjzcesm62KlTj2KjFYNeqNNr1Z/qHKTxT9GeMOaQSCLEGxB1BWum5J3nqX2cT4qHD/Dmez3EB39RWc0fK+ldwZrGl4atov4pfYtKvjFhAEAQggBAkkShIQBAEAQBAEAQgIAgCAIAgCAIAgCAICHaHsUrMiWTLUNAuDWj92fV+p1ansLogvErKztLp5O8PkFmLJlDuLapvPmdPcuz7zl30ljHJcfqbcurN3jkiVQSVrafTv7w+QV/Z/p/N4lssyXU2aSsghJzt44cdFVNtc8CQgdZDcQ+IXjaI61KS5FxZJateD5o8UWtm5nsu6U2OgpXdUQZ72Es/pWxWWV9GL5GnW+OraJrn64nl29FLwa2pZy4rnDuv88fBwWEtMdWrJczaLFU16EJcvTAs32X1ln1EBPpNbK0crtOF3+pvgrzRs8ZR7zG6apfLGp3HoSy5r4QBAEAQBAEBzq/blLTv4c0zY32DsJDicJ0OQ9i8Z2inB3SdzLilZa1WOtCN6Nujqo5mNkicHxuvhcL2NiQdfaCq4TjNa0XgeVSnKnJxmrmfZVlAQBCAgCAIAgCAISEAQgIAgCAh2h7FKzIlky1N0C4NaP3Z9X6nVqewuiC8isrG0unk737BZey5Q7i2qbzE6Ls+85d9JYm6BcfqbcurN3jkiVQSVraXTv7w+QV/Z/p7hLZZkups0lBAQ9ocC06EEHsOShq/AlO53nhM8BY97Da7HOacwMwbFavJXNo3mMlKKkt56h9nU2KhDf4csjPGz/6lm9Hyvo3cGzWNLR1bRfxS+3sVz7TqTDURTDSWLCe+w5/BzfBWmkYXTUuK9DI6GqX0pQ4P1/GcXdGt4FbTvvZpeI3d1/m59lwfcrayz1KsX+Yl7bqXaWeS5X+GJ7ItiNOCEhAEAQBAak9baRsEUb6iqe3E2CKxeGXtje4kNjZcjznEBW9e0wpZ58C7stiq2h/LlxZ8dtfZZX15bNN5JSyfdssx89VLYuwgPs0MABdckXyWGtNbtXratxsljsrs8dXWvXQ2pN3K/ZULGSUkctIwuHEoZZJ3MBJcXOhkAeR6TjhxWAPIK6s9uhBKDjcuRj7XoupUk6kZ3vnh6GjSbwU01R5PG/E8xiRrhYxuBFyARzA5Gyv4WmnKeonzMVUsdWnT7SSwvu5nVVwWgQkIQEAQBCQhAQkIAhAQkIQEBDtD2KVmRLZZam6BcGtH7s+r9Tq1PYXRBeJWVjaPTyd76LM2XKHcW1TeYldm3nL/AKSxNXH6m3Lqzdo5IlUElZ2j00ne+iyFD6e4PZZmupGkbj7+SSeo7wVv+qo/zRkf9Ktv+zLwOzsTYsDxjqpSzMgQi7XEDm53IdnirS0W/VerTu6mQsegqslrVoyXK71f28Tcg2Ju9Fia6noZHlxc91RDFNKXHM3c5pPNYltyd7zM8qEoRuUWkjkbw01DHIwUEdPHGWfeNpo2RR8QE5kNAF7Wz9izdgpzhBqSuxNV0rVp1akZU5J4bupQftGo+JRcQawSNfpfzHeYR4lp9yjSENalfwGiKurX1eK/s8uAIzzFueiwhtB7fsms49PDN/Eja4+x1vOHjcLZqU9eClxRpNen2dSUODNteh5BAEAQGrtOqMMTntbjk81kTBrJM9waxnvcQvKtU7ODke1moutVjBb/AE3noG5u7LKKnfFIziVMxvWTyYH+VPLc7W0jFy0NIFgDlnc6/KTk3KWZuUIRhFRirkjob1Etggwkj/qOzQSCQSDXQgjsK8is7LmAlpIBLSS0kC7SRYkdWVx70B5XvrsRlBWNq4YhFS103AnaAzCKwtvHOwN9Fr7OaQbecAbZq+sNbUnqvJ+pi9K2btKWus4+n5iaizhrAQBAEICAIAgCEhAEICAISEIMp22uPyg+LQVEHeTVV165exZ26BcItH7s+r9TqlPYXRErxKyr7Q6eTvrM2XKHcW1TeYHRdm3nLvpLG3l2Lj9Tbl1Zu8ckSqCSs7Q6aTvrIUPp7g9lmTtD2Lqe80eWyyzjQLU3mdgjsolQSVnaXTv7w+QVUc0WtbKXeQFtRylZHTo90318EgkcIaeRpYXvaXF40OEXHjfXrVhbLTCMXTzb8jL6PsFWU1Ul8qXi+469DuPu/RMaHUtI9wGb6j78udzNpCR7gsPGnKeyrzZW7lezhbcdTCoeKXhtgs0NYxgijaQ0AhrbCwuOXWs7ZU4UlGWDNV0hTlO0SnCLaw3PhdwNJXRjwgCAIDWmt5Vsy9sJ2nTXubNLhjMYJ/7gYrHSF/ZLqvcymiLv1Dv4P2PYqe+WIAOtmGkuaD7CQL+Cw0sjZjh7/NqvJGPpY2SmCqpqqZrsWLyeCUTO4bW5uddjcuYvbOyoJLDDMyRrXxuD43tD2PabtcxwuHA8wQQgKf8Aazi/wubJthNRFhucYl8shsALWta+d/cq6e2ruKPKtd2cr+D9ColbOaQEAQkIQEAQkIQEAQkKAZB3sHx+qXEp8j6SOAt5rc2tOh5jtVCV+8rk0rsFkY8X8jPA/VTq82Rr/wDFB8/5GadR6u1TGGObIlUwfyoso/ZcJtH7s+r9TqVPYXRBeJWVjaPTyd76LM2XKHcW1TeY8l2becv3FiGgXH6m3Lqzdo5IlUElZ2h00nfWQofT3B7LMnaHsXU95o8tllnboOxam8zsENlEqCSs7RP30nf+iqjmi1rZS7yFtW85R9JseWzYQziyBjRZrQ9waB1WC8Oyhffqq86fGMbr7j4L0Kzh1Y++d3x+ytZbRb1dmXRnbV6c3WQQkIAgNTalM6WJwjdgmaWSwv8AUnjcHxu/U0Lxr0+0puJ72Wv2NWM+GfQ9J3R3gZXU3lGJrZGuLaiG2F1LKB50TrnO2ZxZXBByWvtNXpm5RkpJSjkyxArzKjn7H2f5K18IeDCZXvp47WMMTrOMQN82h5fbSzS1v4UBQd+9r+V1kdBG8SQUk7amqe1tmtnaPuaXFfznBxLzllZoOavLFRc5625GO0laVTp6ieMsO7e/Y05JXBzgCLAkDJul1mlFNI1mU5KTSI8of1/yt+inUiR2suPoQah/X/K36JqRHay4+gEpOp+ATVQ122RN6ThyDiB2XUxyRE9powVRSEICEhCAgJUEmWP2A8vxfVRdzJ1uXqSHj1G/z/VNV8SdZfxXn9wZRb0Gfz/+yKLvzfl9iJTVz+Vef3LKFwm0fuz6v1Op09hdEF4lZWNo9PJ3v2CzFlyh3FtU3mJOWgHiuzbzmF+GRYm6BcgqbcurN1jkiVQSVnaHTP76yFD6e4PZZk7Q9i6nvNHlsvoWhugWpvM7BDZQUElY2h0z++qo5ota2Uu8Lat5yj6SVQdRjkgoJOHVdM7vj9lbS2i3q7MujO2r05usjiHbbvUb4lVape/pVxH+Nu9RviU1R+lXE1jvI/Hg4bLYgL3dfNeMpXO49f0UdW+8si9DGmpJSObIZ6eU09QW4HuDWyRTx/w5onZSN7cxyKta9lhVxyfEv7Jb6lnwzjw+x3Gb7bUa0NkpKSVwcw8SCqlpcQa4OsWOY+wNrEX0JWPlo+ruuMvHTFBrFNGptbeHalaAx7qehhGf/K45qzNrmnDO8ARmziLtbfM55quno13/ADvwPKtpmN11KOPP8+xrUMLII2xxMY1jdPMa4k83FxzJPWVkoUowWrHLqYWpaJ1Ja0rm+iPvxz1M/wAtn0VWoufiyjtHwXgiRKbjJn+Wz6Jq9fFhTd+S8EJX2c4Wbk4j0Gcj2JFXpP3EpNSaw8EYF59n6Wj9lVcU3mJKEBSQEJCEBAEAQBAEBDtD2KVmRLJlqbp7lwa0fuz6v1OrU9hdESvErKxtLp394fILMWTKHcW1TeYcl2fecu3FiGi4/U25dWbvHJEqgkrW0Omf3voshQ+nuD2WS7Q9i6nvNHlsvoWhugWpPM7BHZQQqKxtDppO+qo5otK2Uu8FbVvOUfSSqDqMckFBJw6npnd/91bS2i3q7Mu87ivTm6yKcV6GXCA0D0w77fmFaT2mXH0dx6AV7mAIugCC8ILwgCEhCCSb5qCbyFJAQBAEAQBAEAQEoCEAdoexSsymWTLSNB2Lg1o/en1fqdXp7C6IleJWVnafTyd4fILMWTKHd6ltU3nyK7PvOXfSWNugXH6m3Lqzd45IlUEla2j0z+8PkFf2f6e4S2WS7Q9i6pvNHlsstDdAtTeZ2CGygoKis7R6eTvfRVRzRaVspd5BW1HKPpJXmdRjkghJw6rpnd8fsraW0W9XZl0Z3FenNlkU4r0MwEBoHph32/MK0ntMuPo7i/u5r3NfeRZBCz1W/pC1ftqn8n4s6urHZ7v24/4r7Dgs9Vv6QnbVP5PxZP6Oz/7cf8V9iuVx++eBkMdrDIKqFWprL5n4stK9koKMrqccn9K+xC2Y5msggCAIAgCAIAgCAICUAQBAEBDtD2KVmRLJlpGg9y4NaP3Z9X6nVqewuiJXiVlZ2p07+0f6QsvY8ofm8t6u8+S7RvOXfSWNvJcfqbcurN2jkiVQSVrafTv7w+QV/Z/p7vUS2WS7Q9i6pvNHlsss7dAtTeZ2COyiVBJWdpdO/vD5BVRzRa1spdGQtqOUfSSvM6jHJBCTiVfTO74/ZW0tot6uzLozthXpzfcU4r0MuEBoHph32/MK1ntMuFsdxf3c17I195FnC1M7AsiUJKvXj79/fVUNpdSytGxPo/QBbUcrWQQklAEAQEIAgJQH/9k="
              alt="Blog Image"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Top 10 Task Management Tools in 2024</h3>
              <p className="text-gray-600 text-sm">
                Explore the best tools to organize your tasks and boost productivity.
              </p>
              <a
                href="#"
                className="text-blue-500 font-semibold hover:underline mt-4 block"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>

     
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-sm">&copy; 2024 Taskify. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Blogs;
