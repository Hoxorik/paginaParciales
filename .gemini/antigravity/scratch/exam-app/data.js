const quizData = [
  {
    "id": "tema_1",
    "title": "1º Parcial - Tema 1",
    "questions": [
      {
        "id": "Ejercicio 1",
        "question": "A. Comenzamos la Unidad 1 caracterizando los argumentos. Atendiendo a esto, determiná si el siguiente fragmento es un argumento. Escribí \"SI\" o \"NO\" donde dice \"A\" en la grilla de resolución. Si un mamut tenía mucho pelo, entonces vivía en un ambiente frío. El mamut colombino no vivía en ambientes fríos y, por lo tanto, no tenía mucho pelo. B. Seleccioná la opción que justifica tu respuesta y escribí el número donde dice \"B\" en la grilla de resolución.",
        "options": [
          {
            "text": "porque es un enunciado.",
            "is_correct": false
          },
          {
            "text": "porque la conclusión es verdadera.",
            "is_correct": false
          },
          {
            "text": "porque se pueden identificar premisas y conclusión.",
            "is_correct": true
          },
          {
            "text": "porque hay un enunciado condicional.",
            "is_correct": false
          }
        ],
        "explanation": "En este ejercicio se pide que determines si el fragmento es un argumento. Para ello es importante tener presente que en todo argumento hay enunciados que se ofrecen como razones (las premisas) a favor de otro que se pretende concluir o establecer (la conclusión). Recordá que hay ciertas expresiones que, cuando están, nos ayudan a distinguir las premisas de la conclusión. En el libro de la cátedra las denominamos “indicador de premisa” e “indicador de conclusión”. En este caso, el indicador \"por lo tanto\" ayuda a identificar la conclusión."
      },
      {
        "id": "Ejercicio 2",
        "question": "Dado el siguiente argumento, indicá cuáles son sus premisas. Seleccioná dos opciones y escribí los números en la grilla de resolución. El tiranosaurio rex tenía dientes que medían hasta 30 cm de largo. Por otro lado, los del megalodón medían hasta 18 cm de largo. Por consiguiente, los carnívoros prehistóricos tenían mordidas letales.",
        "options": [
          {
            "text": "Los dientes del megalodón medían hasta 18 cm de largo.",
            "is_correct": true
          },
          {
            "text": "Los del tiranosaurio rex medían hasta 30 cm de largo.",
            "is_correct": false
          },
          {
            "text": "Los carnívoros prehistóricos tenían mordidas letales.",
            "is_correct": false
          },
          {
            "text": "El tiranosaurio rex tenía dientes que medían hasta 30 cm de largo.",
            "is_correct": true
          }
        ],
        "explanation": "Para identificar la respuesta es importante recordar que hay ciertas expresiones que, cuando están, nos ayudan a identificar las premisas y la conclusión de un argumento. En el libro las llamamos indicadores de premisa y de conclusión, respectivamente. En el argumento dado hay un indicador de conclusión, a saber, \"por consiguiente\". Es importante recordar dos cosas: (i) tanto las premisas como la conclusión se deben enunciar de manera completa, y (ii) los indicadores nunca forman parte de las premisas o la conclusión."
      },
      {
        "id": "Ejercicio 3",
        "question": "Los argumentos están compuestos por enunciados. Estos enunciados pueden combinarse mediante expresiones lógicas dando lugar a enunciados complejos. Dados los siguientes enunciados verdaderos: - Los dinosaurios tenían extremidades verticales. - Los dinosaurios eran animales vertebrados. Determiná cuál de los siguientes enunciados complejos es verdadero. Seleccioná una opción y escribí el número en la grilla de resolución.",
        "options": [
          {
            "text": "Los dinosaurios no tenían extremidades verticales pero eran animales vertebrados.",
            "is_correct": false
          },
          {
            "text": "Si los dinosaurios tenían extremidades verticales, eran animales vertebrados.",
            "is_correct": true
          },
          {
            "text": "Los dinosaurios no tenían extremidades verticales o no eran animales vertebrados.",
            "is_correct": false
          },
          {
            "text": "Los dinosaurios no tenían extremidades verticales.",
            "is_correct": false
          }
        ],
        "explanation": "En este ejercicio tuviste que evaluar el valor veritativo de una conjunción, una negación, una disyunción y un condicional: 1.        Las conjunciones pueden expresarse con “y”, “,”, “además”, “pero”. Las negaciones con “no”, “ no es cierto que”. Los condicionales con “si… entonces” y las disyunciones con “o”, “ o bien … o bien”. 2.        Las conjunciones son verdaderas sólo en el caso en que ambos conyuntos sean verdaderos, esto es, basta que uno de los enunciados combinados por la conjunción sea falso, para que el enunciado complejo resulte falso. 3.        Cuando un enunciado es verdadero, su negación es falsa y, a la inversa, cuando un enunciado es falso, su negación resultará verdadera. 4.        Los enunciados condicionales son falsos únicamente cuando el antecedente es verdadero y el consecuente falso, en el resto de los casos son verdaderos. 5.         Hay dos tipos de disyunciones, las inclusivas y las exclusivas. Expresiones como “o bien… o bien” sugieren que se trata de una disyunción exclusiva, en cambio la mera presencia de una “o” nos conduce a pensar que es inclusiva. Cuando ambas partes son falsas, la disyunción entre ambas es falsa, no importa el tipo de disyunción del cual se trate. Por el contrario, cuando uno de los disyuntos es verdadero y el otro falso, la disyunción es verdadera. El caso en que ambos tipos de disyunciones arrojan valores diferentes es aquel en que ambos disyuntos son verdaderos. Si la disyunción es inclusiva, el enunciado complejo será verdadero; si es exclusiva, será falso. En este ejercicio el enunciado complejo verdadero es el condicional, dado que tiene antecedente y consecuente verdaderos."
      },
      {
        "id": "Ejercicio 4",
        "question": "Al estudiar los enunciados, los distinguimos por su alcance. Dados los siguientes cuatro enunciados determiná cuál de ellos es un enunciado universal. Seleccioná una opción y escribí el número en la grilla de resolución.",
        "options": [
          {
            "text": "El 80% de los tuátaras que nacen son machos.",
            "is_correct": false
          },
          {
            "text": "Todos los tuátaras son reptiles.",
            "is_correct": true
          },
          {
            "text": "Algunos tuátaras viven más de 100 años.",
            "is_correct": false
          },
          {
            "text": "Henry, el tuátara, vive en Nueva Zelanda.",
            "is_correct": false
          }
        ],
        "explanation": "En este ejercicio se te pide que reconozcas un tipo de enunciado, en este caso, un enunciado universal. Los enunciados universales son aquellos que afirman algo respecto de todos los miembros de un conjunto. Así, la respuesta es \"Todos los tuátaras son reptiles\"."
      },
      {
        "id": "Ejercicio 5",
        "question": "Los enunciados se clasifican según su alcance y ello determina sus condiciones de verdad. Dado el siguiente enunciado determiná en qué situación resultaría falso. Seleccioná una opción y escribí el número en la grilla de resolución. Todos los ictiosaurios son carnívoros.",
        "options": [
          {
            "text": "Si encontramos un animal que es un tiranosaurio y solo se alimenta solo de vegetales.",
            "is_correct": false
          },
          {
            "text": "Si encontramos un animal que es un tiranosaurio y se alimenta de carne.",
            "is_correct": false
          },
          {
            "text": "Si encontramos un animal que es un ictiosaurio y solo se alimenta de vegetales.",
            "is_correct": true
          },
          {
            "text": "Si encontramos un animal que es un ictiosaurio y se alimenta de carne.",
            "is_correct": false
          }
        ],
        "explanation": "El enunciado propuesto es un enunciado universal. Para que un enunciado universal sea falso, basta con que encontremos un caso de un miembro del conjunto al que se refiere el enunciado que no posea la propiedad asignada. En este caso, el único caso incompatible con el enunciado es aquel en el que un animal es un ictiosaurio y se alimenta solo de vegetales."
      },
      {
        "id": "Ejercicio 6",
        "question": "Otro modo de clasificar los enunciados es agruparlos en tautologías, contradicciones o contingencias. Identificá cuál de los siguientes enunciados es una tautología. Seleccioná una opción y escribí el número en la grilla de resolución.",
        "options": [
          {
            "text": "Los dinosaurios eran animales terrestres y no eran animales terrestres.",
            "is_correct": false
          },
          {
            "text": "Si los dinosaurios eran animales terrestres entonces eran animales terrestres.",
            "is_correct": true
          },
          {
            "text": "Los dinosaurios eran animales terrestres pero también acuáticos.",
            "is_correct": false
          },
          {
            "text": "Los dinosaurios eran animales terrestres.",
            "is_correct": false
          }
        ],
        "explanation": "En este ejercicio se pide que reconozcas una tautología. Para ello es importante tener en cuenta que: - Las tautologías son aquellos enunciados que son necesariamente verdaderos, no son meras verdades, sino que por la forma de la oración, sea como sea el mundo, será verdadera. - Las contradicciones son necesariamente falsas. -A diferencia de las tautologías y las contradicciones, las contingencias son enunciados que tal vez sean verdaderos o tal vez falsos, pero no son necesariamente ninguna de las dos cosas. Aun enunciados que nos parecen obviamente verdaderos serán contingentes si su verdad depende de cuestiones empíricas y no de la estructura misma de la oración. En este ejercicio tenemos un condicional que siempre tendrá antecedente y consecuente con el mismo valor de verdad, dado que el mismo enunciado funciona como antecedente y consecuente. De modo que, independientemente de que los dinosaurios sean animales terrestres o no, dicha oración condicional será necesariamente verdadera."
      },
      {
        "id": "Ejercicio 7",
        "question": "Al caracterizar los argumentos deductivos introdujimos la noción de validez. Dados los siguientes enunciados, determiná qué conclusión se infiere de modo válido. Si los mamuts tienen espaldas rectas, entonces aparecen con espaldas rectas en las pinturas rupestres. Pero los mamuts no aparecen con espaldas rectas en las pinturas rupestres. Seleccioná una opción y escribí el número en la grilla de resolución.",
        "options": [
          {
            "text": "Los mamuts no aparecen en las pinturas rupestres.",
            "is_correct": false
          },
          {
            "text": "Los mamuts tienen espaldas rectas.",
            "is_correct": false
          },
          {
            "text": "Los mamuts aparecen con joroba en las pinturas rupestres.",
            "is_correct": false
          },
          {
            "text": "Los mamuts no tienen espaldas rectas.",
            "is_correct": true
          }
        ],
        "explanation": "En este ejercicio se te pide que elijas qué enunciado de la lista puede funcionar como la conclusión de un argumento válido dada las premisas propuestas. Los argumentos válidos se pueden reconocer de modos diferentes. Por un lado, porque si suponemos  que las premisas son todas verdaderas, entonces necesariamente hemos de admitir que la conclusión es verdadera también. Por otro lado, podemos atender a su estructura: si reconocemos alguna estructura de las presentadas oportunamente en el material de lectura, tales como el Modus Ponens , Modus Tollens , Silogismo disyuntivo, Instanciación del universal, etc., sabemos que estamos frente a una forma válida. En este caso, la opción 4 es el único enunciado que se puede inferir en forma válida, ya que es un caso de Modus Tollens . Recordá lo siguiente: lo que hace que un argumento sea válido o inválido no es que sus premisas y conclusión sean de hecho  verdaderas o falsas; lo que lo hace válido o inválido es su forma ."
      },
      {
        "id": "Ejercicio 8",
        "question": "Determiná cuál de los siguientes argumentos es inválido. Seleccioná una opción y escribí el número en la grilla de resolución.",
        "options": [
          {
            "text": "Si el león de las cavernas caza herbívoros, entonces vive en el bosque. No es cierto que el león de las cavernas viva en el bosque. Por lo tanto, no caza herbívoros.",
            "is_correct": false
          },
          {
            "text": "El tigre dientes de sable vive en grupo o es solitario. Pero no es cierto que el tigre dientes de sable sea solitario. Por lo tanto, vive en grupo.",
            "is_correct": false
          },
          {
            "text": "Si el rinoceronte lanudo pertenece a la megafauna prehistórica, entonces se extinguió hace 30.000 años. Y pertenece a la megafauna prehistórica, lo cual prueba que se se extiguió hace 30.000 años.",
            "is_correct": false
          },
          {
            "text": "El rinoceronte lanudo tiene pelaje o cuernos. Por consiguiente, tiene pelaje.",
            "is_correct": true
          }
        ],
        "explanation": "En este ejercicio se te pide que reconozcas un argumento inválido. Los argumentos inválidos se pueden reconocer de modos diferentes. Por un lado, porque resulta concebible que las premisas sean verdaderas y la conclusión no. Por otro lado, si atendemos a su estructura , y reconocemos un argumento inductivo o una falacia, sabremos que estamos frente a una forma inválida. En este caso el único argumento inválido es de la forma A o B. Por consiguiente, A . Recordá lo siguiente: lo que hace que un argumento sea válido o inválido no es que sus premisas y conclusión sean de hecho verdaderas o falsas; lo que lo hace válido o inválido es su forma . En particular, un argumento inválido puede tener premisas verdaderas y una conclusión verdadera."
      },
      {
        "id": "Ejercicio 9",
        "question": "Al presentar los argumentos inductivos distinguimos tres tipos: por enumeración incompleta, por analogía y silogismos inductivos. Dado el siguiente conjunto de enunciados: El tiranosaurio era un dinosaurio carnívoro y tenía garras afiladas. El velociraptor era un dinosaurio carnívoro y tenía garras afiladas. ........................................................................................................................... ........................................................................................................................... Seleccioná cuáles de los siguientes enunciados corresponden respectivamente a la premisa faltante y a la conclusión, de modo tal que resulte un argumento inductivo por analogía. Escribí en la grilla de resolución la opción seleccionada como premisa donde dice \"P\" y la opción seleccionada como conclusión donde dice \"C\".",
        "options": [
          {
            "text": "El estegosaurio era un dinosaurio carnívoro.",
            "is_correct": true
          },
          {
            "text": "El tiranosaurio era un dinosaurio carnívoro.",
            "is_correct": false
          },
          {
            "text": "La mayoría de los dinosaurios carnívoros tenían garras afiladas.",
            "is_correct": false
          },
          {
            "text": "Todos los dinosaurios carnívoros tenían garras afiladas.",
            "is_correct": false
          },
          {
            "text": "El estegosaurio tenía garras afiladas.",
            "is_correct": true
          }
        ],
        "explanation": "Los argumentos inductivos por analogía son aquellos en que comparamos varios casos y constatamos que los mismos se asemejan en una o más propiedades, para inferir, a partir de ahí, que uno de esos casos tiene además otra propiedad que los otros comparten. En este caso, partimos de comparar tres dinousaurios y constatar que se asemejan en ciertos aspectos, para concluir que uno de esos también se asemeja en un nuevo aspecto que los otros dos comparten. Hay dos soluciones posibles para este ejercicio. Una solución es tomar \"El estegosaurio era un dinosaurio carnívoro\" como premisa y \"El estegosaurio tenía garras afiladas\" como conclusión. La otra solución es, a la inversa, tomar \"El estegosaurio era un dinosaurio carnívoro\" como conclusión y \"El estegosaurio tenía garras afiladas\" como premisa."
      },
      {
        "id": "Ejercicio 10",
        "question": "Tras clasificar los distintos tipos de argumentos inductivos establecimos criterios específicos para su evaluación. Atendiendo a esto, determiná qué premisa sirve para fortalecer el siguiente argumento inductivo sin que deje de ser un argumento inductivo por enumeración incompleta. Seleccioná una opción y escribí el número en la grilla de resolución. El mamut y el rinoceronte lanudo, al igual que el mastodonte, eran depredadores. Por lo tanto, es probable que todos los animales grandes de la Edad de Hielo fueran depredadores, dado que el mamut, el rinoceronte lanudo y el mastodonte eran animales grandes de la Edad de Hielo.",
        "options": [
          {
            "text": "El mamut, el rinoceronte lanudo y el mastodonte constituyen las únicas tres especies de animales grandes de la Edad de Hielo.",
            "is_correct": false
          },
          {
            "text": "El megaterio no era depredador.",
            "is_correct": false
          },
          {
            "text": "El tigre dientes de sable, que era un animal grande de la Edad de hielo, era depredador.",
            "is_correct": true
          },
          {
            "text": "La hiena de las cavernas era un animal depredador.",
            "is_correct": false
          }
        ],
        "explanation": "Un argumento inductivo por enumeración incompleta parte de la presencia de una propiedad en una muestra y concluye la presencia de esa propiedad en todo el conjunto al cual los casos de esa muestra pertenecen. El argumento inductivo más fuerte será aquel en el cual la muestra a partir de la cual se generaliza en la conclusión sea mayor. Ten en cuenta que, para que el argumento siga siendo inductivo, la muestra no puede ser igual al conjunto sobre el que se realiza la generalización."
      }
    ]
  },
  {
    "id": "tema_2",
    "title": "1º Parcial - Tema 2",
    "questions": [
      {
        "id": "Ejercicio 1",
        "question": "A. Comenzamos la Unidad 1 caracterizando los argumentos. Atendiendo a esto, determiná si el siguiente fragmento es un argumento. Escribí \"SI\" o \"NO\" donde dice \"A\" en la grilla de resolución. Si un mamut tenía mucho pelo, entonces vivía en un ambiente frío. El mamut colombino no vivía en ambientes fríos y, por lo tanto, no tenía mucho pelo. B. Seleccioná la opción que justifica tu respuesta y escribí el número donde dice \"B\" en la grilla de resolución.",
        "options": [
          {
            "text": "porque la conclusión es verdadera.",
            "is_correct": false
          },
          {
            "text": "porque se pueden identificar premisas y conclusión.",
            "is_correct": true
          },
          {
            "text": "porque hay un enunciado condicional.",
            "is_correct": false
          },
          {
            "text": "porque es un enunciado.",
            "is_correct": false
          }
        ],
        "explanation": "En este ejercicio se pide que determines si el fragmento es un argumento. Para ello es importante tener presente que en todo argumento hay enunciados que se ofrecen como razones (las premisas) a favor de otro que se pretende concluir o establecer (la conclusión). Recordá que hay ciertas expresiones que, cuando están, nos ayudan a distinguir las premisas de la conclusión. En el libro de la cátedra las denominamos “indicador de premisa” e “indicador de conclusión”. En este caso, el indicador \"por lo tanto\" ayuda a identificar la conclusión."
      },
      {
        "id": "Ejercicio 2",
        "question": "Dado el siguiente argumento, indicá cuáles son sus premisas. Seleccioná dos opciones y escribí los números en la grilla de resolución. El tiranosaurio rex tenía dientes que medían hasta 30 cm de largo. Por otro lado, los del megalodón medían hasta 18 cm de largo. Por consiguiente, los carnívoros prehistóricos tenían mordidas letales.",
        "options": [
          {
            "text": "Los carnívoros prehistóricos tenían mordidas letales.",
            "is_correct": false
          },
          {
            "text": "Los dientes del megalodón medían hasta 18 cm de largo.",
            "is_correct": true
          },
          {
            "text": "El tiranosaurio rex tenía dientes que medían hasta 30 cm de largo.",
            "is_correct": true
          },
          {
            "text": "Los del tiranosaurio rex medían hasta 30 cm de largo.",
            "is_correct": false
          }
        ],
        "explanation": "Para identificar la respuesta es importante recordar que hay ciertas expresiones que, cuando están, nos ayudan a identificar las premisas y la conclusión de un argumento. En el libro las llamamos indicadores de premisa y de conclusión, respectivamente. En el argumento dado hay un indicador de conclusión, a saber, \"por consiguiente\". Es importante recordar dos cosas: (i) tanto las premisas como la conclusión se deben enunciar de manera completa, y (ii) los indicadores nunca forman parte de las premisas o la conclusión."
      },
      {
        "id": "Ejercicio 3",
        "question": "Los argumentos están compuestos por enunciados. Estos enunciados pueden combinarse mediante expresiones lógicas dando lugar a enunciados complejos. Dados los siguientes enunciados verdaderos: - Los dinosaurios eran animales vertebrados. - Los dinosaurios tenían extremidades verticales. Determiná cuál de los siguientes enunciados complejos es verdadero. Seleccioná una opción y escribí el número en la grilla de resolución.",
        "options": [
          {
            "text": "Si los dinosaurios tenían extremidades verticales, eran animales vertebrados.",
            "is_correct": true
          },
          {
            "text": "Los dinosaurios no tenían extremidades verticales pero eran animales vertebrados.",
            "is_correct": false
          },
          {
            "text": "Los dinosaurios no tenían extremidades verticales.",
            "is_correct": false
          },
          {
            "text": "Los dinosaurios no tenían extremidades verticales o no eran animales vertebrados.",
            "is_correct": false
          }
        ],
        "explanation": "En este ejercicio tuviste que evaluar el valor veritativo de una conjunción, una negación, una disyunción y un condicional: 1.        Las conjunciones pueden expresarse con “y”, “,”, “además”, “pero”. Las negaciones con “no”, “ no es cierto que”. Los condicionales con “si… entonces” y las disyunciones con “o”, “ o bien … o bien”. 2.        Las conjunciones son verdaderas sólo en el caso en que ambos conyuntos sean verdaderos, esto es, basta que uno de los enunciados combinados por la conjunción sea falso, para que el enunciado complejo resulte falso. 3.        Cuando un enunciado es verdadero, su negación es falsa y, a la inversa, cuando un enunciado es falso, su negación resultará verdadera. 4.        Los enunciados condicionales son falsos únicamente cuando el antecedente es verdadero y el consecuente falso, en el resto de los casos son verdaderos. 5.         Hay dos tipos de disyunciones, las inclusivas y las exclusivas. Expresiones como “o bien… o bien” sugieren que se trata de una disyunción exclusiva, en cambio la mera presencia de una “o” nos conduce a pensar que es inclusiva. Cuando ambas partes son falsas, la disyunción entre ambas es falsa, no importa el tipo de disyunción del cual se trate. Por el contrario, cuando uno de los disyuntos es verdadero y el otro falso, la disyunción es verdadera. El caso en que ambos tipos de disyunciones arrojan valores diferentes es aquel en que ambos disyuntos son verdaderos. Si la disyunción es inclusiva, el enunciado complejo será verdadero; si es exclusiva, será falso. En este ejercicio el enunciado complejo verdadero es el condicional, dado que tiene antecedente y consecuente verdaderos."
      },
      {
        "id": "Ejercicio 4",
        "question": "Al estudiar los enunciados, los distinguimos por su alcance. Dados los siguientes cuatro enunciados determiná cuál de ellos es un enunciado universal. Seleccioná una opción y escribí el número en la grilla de resolución.",
        "options": [
          {
            "text": "Henry, el tuátara, vive en Nueva Zelanda.",
            "is_correct": false
          },
          {
            "text": "El 80% de los tuátaras que nacen son machos.",
            "is_correct": false
          },
          {
            "text": "Algunos tuátaras viven más de 100 años.",
            "is_correct": false
          },
          {
            "text": "Todos los tuátaras son reptiles.",
            "is_correct": true
          }
        ],
        "explanation": "En este ejercicio se te pide que reconozcas un tipo de enunciado, en este caso, un enunciado universal. Los enunciados universales son aquellos que afirman algo respecto de todos los miembros de un conjunto. Así, la respuesta es \"Todos los tuátaras son reptiles\"."
      },
      {
        "id": "Ejercicio 5",
        "question": "Los enunciados se clasifican según su alcance y ello determina sus condiciones de verdad. Dado el siguiente enunciado determiná en qué situación resultaría falso. Seleccioná una opción y escribí el número en la grilla de resolución. Todos los ictiosaurios son carnívoros.",
        "options": [
          {
            "text": "Si encontramos un animal que es un ictiosaurio y se alimenta de carne.",
            "is_correct": false
          },
          {
            "text": "Si encontramos un animal que es un ictiosaurio y solo se alimenta de vegetales.",
            "is_correct": true
          },
          {
            "text": "Si encontramos un animal que es un tiranosaurio y solo se alimenta solo de vegetales.",
            "is_correct": false
          },
          {
            "text": "Si encontramos un animal que es un tiranosaurio y se alimenta de carne.",
            "is_correct": false
          }
        ],
        "explanation": "El enunciado propuesto es un enunciado universal. Para que un enunciado universal sea falso, basta con que encontremos un caso de un miembro del conjunto al que se refiere el enunciado que no posea la propiedad asignada. En este caso, el único caso incompatible con el enunciado es aquel en el que un animal es un ictiosaurio y se alimenta solo de vegetales."
      },
      {
        "id": "Ejercicio 6",
        "question": "Otro modo de clasificar los enunciados es agruparlos en tautologías, contradicciones o contingencias. Identificá cuál de los siguientes enunciados es una tautología. Seleccioná una opción y escribí el número en la grilla de resolución.",
        "options": [
          {
            "text": "Los dinosaurios eran animales terrestres y no eran animales terrestres.",
            "is_correct": false
          },
          {
            "text": "Los dinosaurios eran animales terrestres.",
            "is_correct": false
          },
          {
            "text": "Los dinosaurios eran animales terrestres pero también acuáticos.",
            "is_correct": false
          },
          {
            "text": "Si los dinosaurios eran animales terrestres entonces eran animales terrestres.",
            "is_correct": true
          }
        ],
        "explanation": "En este ejercicio se pide que reconozcas una tautología. Para ello es importante tener en cuenta que: - Las tautologías son aquellos enunciados que son necesariamente verdaderos, no son meras verdades, sino que por la forma de la oración, sea como sea el mundo, será verdadera. - Las contradicciones son necesariamente falsas. -A diferencia de las tautologías y las contradicciones, las contingencias son enunciados que tal vez sean verdaderos o tal vez falsos, pero no son necesariamente ninguna de las dos cosas. Aun enunciados que nos parecen obviamente verdaderos serán contingentes si su verdad depende de cuestiones empíricas y no de la estructura misma de la oración. En este ejercicio tenemos un condicional que necesariamente será verdadero debido a que su antecedente y consecuente siempre tendrán el mismo valor, serán ambos verdaderos o ambos falsos. De modo que, independientemente de que los dinosaurios sean animales terrestres o no, esta oración será necesariamente verdadera."
      },
      {
        "id": "Ejercicio 7",
        "question": "Al caracterizar los argumentos deductivos introdujimos la noción de validez. Dados los siguientes enunciados, determiná qué conclusión se infiere de modo válido. Si los mamuts tienen espaldas rectas, entonces aparecen con espaldas rectas en las pinturas rupestres. Pero los mamuts no aparecen con espaldas rectas en las pinturas rupestres. Seleccioná una opción y escribí el número en la grilla de resolución.",
        "options": [
          {
            "text": "Los mamuts no tienen espaldas rectas.",
            "is_correct": true
          },
          {
            "text": "Los mamuts aparecen con joroba en las pinturas rupestres.",
            "is_correct": false
          },
          {
            "text": "Los mamuts tienen espaldas rectas.",
            "is_correct": false
          },
          {
            "text": "Los mamuts no aparecen en las pinturas rupestres.",
            "is_correct": false
          }
        ],
        "explanation": "En este ejercicio se te pide que elijas qué enunciado de la lista puede funcionar como la conclusión de un argumento válido dada las premisas propuestas. Los argumentos válidos se pueden reconocer de modos diferentes. Por un lado, porque si suponemos  que las premisas son todas verdaderas, entonces necesariamente hemos de admitir que la conclusión es verdadera también. Por otro lado, podemos atender a su estructura: si reconocemos alguna estructura de las presentadas oportunamente en el material de lectura, tales como el Modus Ponens , Modus Tollens , Silogismo disyuntivo, Instanciación del universal, etc., sabemos que estamos frente a una forma válida. En este caso, la opción 1 es el único enunciado que se puede inferir en forma válida, ya que es un caso de Modus Tollens . Recordá lo siguiente: lo que hace que un argumento sea válido o inválido no es que sus premisas y conclusión sean de hecho  verdaderas o falsas; lo que lo hace válido o inválido es su forma ."
      },
      {
        "id": "Ejercicio 8",
        "question": "Determiná cuál de los siguientes argumentos es inválido. Seleccioná una opción y escribí el número en la grilla de resolución.",
        "options": [
          {
            "text": "El tigre dientes de sable vive en grupo o es solitario. Pero no es cierto que el tigre dientes de sable sea solitario. Por lo tanto, vive en grupo.",
            "is_correct": false
          },
          {
            "text": "Si el león de las cavernas caza herbívoros, entonces vive en el bosque. No es cierto que el león de las cavernas viva en el bosque. Por lo tanto, no caza herbívoros.",
            "is_correct": false
          },
          {
            "text": "El rinoceronte lanudo tiene pelaje o cuernos. Por consiguiente, tiene pelaje.",
            "is_correct": true
          },
          {
            "text": "Si el rinoceronte lanudo pertenece a la megafauna prehistórica, entonces se extinguió hace 30.000 años. Y pertenece a la megafauna prehistórica, lo cual prueba que se se extiguió hace 30.000 años.",
            "is_correct": false
          }
        ],
        "explanation": "En este ejercicio se te pide que reconozcas un argumento inválido. Los argumentos inválidos se pueden reconocer de modos diferentes. Por un lado, porque resulta concebible que las premisas sean verdaderas y la conclusión no. Por otro lado, si atendemos a su estructura , y reconocemos un argumento inductivo o una falacia, sabremos que estamos frente a una forma inválida. En este caso el único argumento inválido es de la forma A o B. Por consiguiente, A . Recordá lo siguiente: lo que hace que un argumento sea válido o inválido no es que sus premisas y conclusión sean de hecho verdaderas o falsas; lo que lo hace válido o inválido es su forma . En particular, un argumento inválido puede tener premisas verdaderas y una conclusión verdadera."
      },
      {
        "id": "Ejercicio 9",
        "question": "Al presentar los argumentos inductivos distinguimos tres tipos: por enumeración incompleta, por analogía y silogismos inductivos. Dado el siguiente conjunto de enunciados: El tiranosaurio era un dinosaurio carnívoro y tenía garras afiladas. El velociraptor era un dinosaurio carnívoro y tenía garras afiladas. ........................................................................................................................... ........................................................................................................................... Seleccioná cuáles de los siguientes enunciados corresponden respectivamente a la premisa faltante y a la conclusión, de modo tal que resulte un argumento inductivo por analogía. Escribí en la grilla de resolución la opción seleccionada como premisa donde dice \"P\" y la opción seleccionada como conclusión donde dice \"C\".",
        "options": [
          {
            "text": "Todos los dinosaurios carnívoros tenían garras afiladas.",
            "is_correct": false
          },
          {
            "text": "La mayoría de los dinosaurios carnívoros tenían garras afiladas.",
            "is_correct": false
          },
          {
            "text": "El tiranosaurio era un dinosaurio carnívoro.",
            "is_correct": false
          },
          {
            "text": "El estegosaurio era un dinosaurio carnívoro.",
            "is_correct": true
          },
          {
            "text": "El estegosaurio tenía garras afiladas.",
            "is_correct": true
          }
        ],
        "explanation": "Los argumentos inductivos por analogía son aquellos en que comparamos varios casos y constatamos que los mismos se asemejan en una o más propiedades, para inferir, a partir de ahí, que uno de esos casos tiene además otra propiedad que los otros comparten. En este caso, partimos de comparar tres dinousaurios y constatar que se asemejan en ciertos aspectos, para concluir que uno de esos también se asemeja en un nuevo aspecto que los otros dos comparten. Hay dos soluciones posibles para este ejercicio. Una solución es tomar \"El estegosaurio era un dinosaurio carnívoro\" como premisa y \"El estegosaurio tenía garras afiladas\" como conclusión. La otra solución es, a la inversa, tomar \"El estegosaurio era un dinosaurio carnívoro\" como conclusión y \"El estegosaurio tenía garras afiladas\" como premisa."
      },
      {
        "id": "Ejercicio 10",
        "question": "Tras clasificar los distintos tipos de argumentos inductivos establecimos criterios específicos para su evaluación. Atendiendo a esto, determiná qué premisa sirve para fortalecer el siguiente argumento inductivo sin que deje de ser un argumento inductivo por enumeración incompleta. Seleccioná una opción y escribí el número en la grilla de resolución. El mamut y el rinoceronte lanudo, al igual que el mastodonte, eran depredadores. Por lo tanto, es probable que todos los animales grandes de la Edad de Hielo fueran depredadores, dado que el mamut, el rinoceronte lanudo y el mastodonte eran animales grandes de la Edad de Hielo.",
        "options": [
          {
            "text": "El megaterio no era depredador.",
            "is_correct": false
          },
          {
            "text": "El tigre dientes de sable, que era un animal grande de la Edad de hielo, era depredador.",
            "is_correct": true
          },
          {
            "text": "La hiena de las cavernas era un animal depredador.",
            "is_correct": false
          },
          {
            "text": "El mamut, el rinoceronte lanudo y el mastodonte constituyen las únicas tres especies de animales grandes de la Edad de Hielo.",
            "is_correct": false
          }
        ],
        "explanation": "Un argumento inductivo por enumeración incompleta parte de la presencia de una propiedad en una muestra y concluye la presencia de esa propiedad en todo el conjunto al cual los casos de esa muestra pertenecen. El argumento inductivo más fuerte será aquel en el cual la muestra a partir de la cual se generaliza en la conclusión sea mayor. Ten en cuenta que, para que el argumento siga siendo inductivo, la muestra no puede ser igual al conjunto sobre el que se realiza la generalización."
      }
    ]
  },
  {
    "id": "tema_3",
    "title": "1º Parcial - Tema 3",
    "questions": [
      {
        "id": "Ejercicio 1",
        "question": "A. Comenzamos la Unidad 1 caracterizando los argumentos. Atendiendo a esto, determiná si el siguiente fragmento es un argumento. Escribí \"SI\" o \"NO\" donde dice \"A\" en la grilla de resolución. La resurrección genética del mamut será exitosa si los científicos pueden combinar el ADN de elefantes modernos con el ADN de mamuts conservado en el hielo. B. Seleccioná la opción que justifica tu respuesta y escribí el número donde dice \"B\" en la grilla de resolución.",
        "options": [
          {
            "text": "porque contiene más de un enunciado simple.",
            "is_correct": false
          },
          {
            "text": "porque no es verdadero.",
            "is_correct": false
          },
          {
            "text": "porque no se pueden identificar ni premisas ni conclusión.",
            "is_correct": true
          },
          {
            "text": "porque hay un enunciado que pretende dar razones en favor de otro.",
            "is_correct": false
          }
        ],
        "explanation": "En este ejercicio se pide que determines si el fragmento es un argumento. Para ello es importante tener presente que en todo argumento hay enunciados que se ofrecen como razones (las premisas) a favor de otro que se pretende concluir o establecer (la conclusión). Recordá que hay ciertas expresiones que, cuando están, nos ayudan a distinguir las premisas de la conclusión. En el libro de la cátedra las denominamos “indicador de premisa” e “indicador de conclusión”. En este caso, no hay indicadores de ningún tipo porque es un enunciado condicional."
      },
      {
        "id": "Ejercicio 2",
        "question": "Dado el siguiente argumento, indicá cuáles son sus premisas. Seleccioná dos opciones y escribí los números en la grilla de resolución. Los velociraptores deben haber sido de los dinosaurios más inteligentes, ya que su cerebro era grande en comparación con su cuerpo. Además, su estructura cerebral indica que tenían buena visión, coordinación y memoria.",
        "options": [
          {
            "text": "La estructura cerebral de los velociraptors indica que tenían buena visión, coordinación y memoria.",
            "is_correct": true
          },
          {
            "text": "El cerebro de los velociraptors era grande en comparación con su cuerpo.",
            "is_correct": true
          },
          {
            "text": "Los velociraptors fueron de los dinosaurios más inteligentes.",
            "is_correct": false
          },
          {
            "text": "Su cerebro era grande y tenían una estructura cerebral compleja.",
            "is_correct": false
          }
        ],
        "explanation": "Para identificar la respuesta es importante recordar que hay ciertas expresiones que, cuando están, nos ayudan a identificar las premisas y la conclusión de un argumento. En el libro las llamamos indicadores de premisa y de conclusión, respectivamente. En el argumento dado hay indicadores de premisas, a saber, \"ya que\" y \"además\". Es importante recordar dos cosas: (i) tanto las premisas como la conclusión se deben enunciar de manera completa, y (ii) los indicadores nunca forman parte de las premisas o la conclusión."
      },
      {
        "id": "Ejercicio 3",
        "question": "Los argumentos están compuestos por enunciados. Estos enunciados pueden combinarse mediante expresiones lógicas dando lugar a enunciados complejos. Dados los siguientes enunciados verdaderos: - Los dinosaurios eran animales terrestres. - Los dinosaurios tenían columna vertebral. Determiná cuál de los siguientes enunciados complejos es verdadero. Seleccioná una opción y escribí el número en la grilla de resolución.",
        "options": [
          {
            "text": "Los dinosaurios eran animales terrestres y no tenían columna vertebral.",
            "is_correct": false
          },
          {
            "text": "Los dinosaurios eran animales terrestres o tenían columna vertebral.",
            "is_correct": true
          },
          {
            "text": "Los dinosaurios no eran animales terrestres.",
            "is_correct": false
          },
          {
            "text": "Si los dinosaurios eran animales terrestres, no tenían columna vertebral.",
            "is_correct": false
          }
        ],
        "explanation": "En este ejercicio tuviste que evaluar el valor veritativo de una conjunción, una negación, una disyunción y un condicional: 1.        Las conjunciones pueden expresarse con “y”, “,”, “además”, “pero”. Las negaciones con “no”, “ no es cierto que”. Los condicionales con “si… entonces” y las disyunciones con “o”, “ o bien … o bien”. 2.        Las conjunciones son verdaderas sólo en el caso en que ambos conyuntos sean verdaderos, esto es, basta que uno de los enunciados combinados por la conjunción sea falso, para que el enunciado complejo resulte falso. 3.        Cuando un enunciado es verdadero, su negación es falsa y, a la inversa, cuando un enunciado es falso, su negación resultará verdadera. 4.        Los enunciados condicionales son falsos únicamente cuando el antecedente es verdadero y el consecuente falso, en el resto de los casos son verdaderos. 5.         Hay dos tipos de disyunciones, las inclusivas y las exclusivas. Expresiones como “o bien… o bien” sugieren que se trata de una disyunción exclusiva, en cambio la mera presencia de una “o” nos conduce a pensar que es inclusiva. Cuando ambas partes son falsas, la disyunción entre ambas es falsa, no importa el tipo de disyunción del cual se trate. Por el contrario, cuando uno de los disyuntos es verdadero y el otro falso, la disyunción es verdadera. El caso en que ambos tipos de disyunciones arrojan valores diferentes es aquel en que ambos disyuntos son verdaderos. Si la disyunción es inclusiva, el enunciado complejo será verdadero; si es exclusiva, será falso. En este ejercicio el enunciado complejo verdadero es la disyunción inclusiva, dado que tiene sus dos disyuntos verdaderos."
      },
      {
        "id": "Ejercicio 4",
        "question": "Al estudiar los enunciados, los distinguimos por su alcance. Dados los siguientes cuatro enunciados determiná cuál de ellos es un enunciado probabilístico. Seleccioná una opción y escribí el número en la grilla de resolución.",
        "options": [
          {
            "text": "Algunos tuátaras se alimentan de insectos.",
            "is_correct": false
          },
          {
            "text": "Todos los tuátaras son ovíparos.",
            "is_correct": false
          },
          {
            "text": "La probabilidad de que un tuátara que nace sea hembra es de 0.2.",
            "is_correct": true
          },
          {
            "text": "Henry, el tuátara, tiene 92 años.",
            "is_correct": false
          }
        ],
        "explanation": "En este ejercicio se te pide que reconozcas un enunciado probabilístico. Un enunciado de este tipo asigna una probabilidad a la ocurrencia de un fenómeno o un conjunto de fenómenos. Así, la respuesta es \"La probabilidad de que un tuátara que nace sea hembra es de 0.2\"."
      },
      {
        "id": "Ejercicio 5",
        "question": "Los enunciados se clasifican según su alcance y ello determina sus condiciones de verdad. Dado el siguiente enunciado determiná en qué situación resultaría verdadero. Seleccioná una opción y escribí el número en la grilla de resolución. Algunos ictiosaurios se alimentan de moluscos.",
        "options": [
          {
            "text": "Si encontramos un animal que es un tiranosaurio y se alimenta de pequeños herbívoros.",
            "is_correct": false
          },
          {
            "text": "Si encontramos un animal que es un ictiosaurio y se alimenta de peces.",
            "is_correct": false
          },
          {
            "text": "Si encontramos un animal que es un tiranosaurio y se alimenta de moluscos.",
            "is_correct": false
          },
          {
            "text": "Si encontramos un animal que es un ictiosaurio y se alimenta de moluscos.",
            "is_correct": true
          }
        ],
        "explanation": "El enunciado propuesto es un enunciado existencial. Para que un enunciado existencial sea verdadero, basta con encontrar un caso de un miembro del conjunto al que se refiere que posea la propiedad asignada. En este caso, la existencia de un animal que sea un ictiosaurio y se alimente de moluscos basta para afirmar que el enunciado es verdadero."
      },
      {
        "id": "Ejercicio 6",
        "question": "Otro modo de clasificar los enunciados es agruparlos en tautologías, contradicciones o contingencias. Identificá cuál de los siguientes enunciados es una contradicción. Seleccioná una opción y escribí el número en la grilla de resolución.",
        "options": [
          {
            "text": "Los mamuts se alimentaban de arbustos y no se alimentaban de arbustos.",
            "is_correct": true
          },
          {
            "text": "Los mamuts se alimentaban de arbustos o no se alimentaban de arbustos.",
            "is_correct": false
          },
          {
            "text": "Los mamuts se alimentaban de arbustos.",
            "is_correct": false
          },
          {
            "text": "Si los mamuts se alimentaban de arbustos entonces se alimentaban de arbustos.",
            "is_correct": false
          }
        ],
        "explanation": "En este ejercicio se pide que reconozcas una contradicción. Para ello es importante tener en cuenta que: - Las tautologías son aquellos enunciados que son necesariamente verdaderos, no son meras verdades, sino que por la forma de la oración, sea como sea el mundo, será verdadera. - Las contradicciones son enunciados que son falsos en toda situación posible; son falsos en virtud de su forma. Una forma contradictoria típica es \"A y no A\". -A diferencia de las tautologías y las contradicciones, las contingencias son enunciados que tal vez sean verdaderos o tal vez falsos, pero no son necesariamente ninguna de las dos cosas. Aun enunciados que nos parecen obviamente verdaderos serán contingentes si su verdad depende de cuestiones empíricas, y no de la estructura misma de la oración. En este ejercicio tenemos una conjunción (opción 1) que resultará necesariamente falsa dado que siempre sucederá que si uno de sus conyuntos es verdadero el otro resultará falso; y sabemos que siempre que una conjunción tenga un conyunto verdadero y otro falso, resultará falsa. Podemos ver, además, que dicha conjunción se corresponde con la forma típica de una contradicción."
      },
      {
        "id": "Ejercicio 7",
        "question": "Al caracterizar los argumentos deductivos introdujimos la noción de validez. Dados los siguientes enunciados, determiná qué conclusión se infiere de modo válido. Si se rescata ADN de mamuts, entonces se pueden clonar. Si se pueden clonar los mamuts, entonces podrían dejar de estar extintos. Seleccioná una opción y escribí el número en la grilla de resolución.",
        "options": [
          {
            "text": "Si los mamuts pueden dejar de estar extintos, entonces se pueden clonar.",
            "is_correct": false
          },
          {
            "text": "Si los mamuts se pueden clonar, entonces se rescata su ADN.",
            "is_correct": false
          },
          {
            "text": "Si se rescata ADN de mamuts, entonces los mamuts podrían dejar de estar extintos.",
            "is_correct": true
          },
          {
            "text": "Los mamuts podrían dejar de estar extintos.",
            "is_correct": false
          }
        ],
        "explanation": "En este ejercicio se te pide que elijas qué enunciado de la lista puede funcionar como la conclusión de un argumento válido dada las premisas propuestas. Los argumentos válidos se pueden reconocer de modos diferentes. Por un lado, porque si suponemos  que las premisas son todas verdaderas, entonces necesariamente hemos de admitir que la conclusión es verdadera también. Por otro lado, podemos atender a su estructura: si reconocemos alguna estructura de las presentadas oportunamente en el material de lectura, tales como el Modus Ponens , Modus Tollens , Silogismo disyuntivo, Instanciación del universal, etc., sabemos que estamos frente a una forma válida. En este caso, la opción 3 es el único enunciado que se puede inferir en forma válida, ya que es un caso de Silogismo Hipotético. Recordá lo siguiente: lo que hace que un argumento sea válido o inválido no es que sus premisas y conclusión sean de hecho  verdaderas o falsas; lo que lo hace válido o inválido es su forma ."
      },
      {
        "id": "Ejercicio 8",
        "question": "Determiná cuál de los siguientes argumentos es inválido. Seleccioná una opción y escribí el número en la grilla de resolución.",
        "options": [
          {
            "text": "Todos los felinos prehistóricos tienen garras retráctiles. El tigre dientes de sable es un felino prehistórico. Por consiguiente, tiene garras retráctiles.",
            "is_correct": false
          },
          {
            "text": "Si el rinoceronte lanudo se alimenta de pasto, entonces el rinoceronte lanudo puede digerir celulosa. Como se alimenta de pasto, queda demostrado entonces que el rinoceronte lanudo puede digerir celulosa.",
            "is_correct": false
          },
          {
            "text": "Si el tiburón megalodón tiene un canal digestivo largo, no tiene que comer con frecuencia. Si no tiene que comer con frecuencia, entonces aguanta más tiempo sin cazar. Luego, si tiene un canal digestivo largo, el megalodón aguanta más tiempo sin cazar.",
            "is_correct": false
          },
          {
            "text": "Si el megalodón vivió en el Cenozoico, entonces es un tiburón prehistórico. Como el megalodón es un tiburón prehistórico, podemos inferir que vivió en el Cenozoico.",
            "is_correct": true
          }
        ],
        "explanation": "En este ejercicio se te pide que reconozcas un argumento inválido. Los argumentos inválidos se pueden reconocer de modos diferentes. Por un lado, porque resulta concebible que las premisas sean verdaderas y la conclusión no. Por otro lado, si atendemos a su estructura , y reconocemos un argumento inductivo o una falacia, sabremos que estamos frente a una forma inválida. En este caso el único argumento inválido es una falacia de afirmación del consecuente. Recordá lo siguiente: lo que hace que un argumento sea válido o inválido no es que sus premisas y conclusión sean de hecho verdaderas o falsas; lo que lo hace válido o inválido es su forma . En particular, un argumento inválido puede tener premisas verdaderas y una conclusión verdadera."
      },
      {
        "id": "Ejercicio 9",
        "question": "Al presentar los argumentos inductivos distinguimos tres tipos: por enumeración incompleta, por analogía y silogismos inductivos. Dado el siguiente conjunto de enunciados: El carnotauro era un dinosaurio carnívoro y tenía dientes afilados. El velociraptor era un dinosaurio carnívoro y tenía dientes afilados. .......................................................................................................................... ............................................................................................................................. Seleccioná cuáles de los siguientes enunciados corresponden respectivamente a la premisa faltante y a la conclusión, de modo tal que resulte un argumento inductivo por enumeración incompleta. Escribí en la grilla de resolución la opción seleccionada como premisa donde dice \"P\" y la opción seleccionada como conclusión donde dice \"C\".",
        "options": [
          {
            "text": "El tiranosaurio era un dinosaurio carnívoro.",
            "is_correct": false
          },
          {
            "text": "Todos los dinosaurios carnívoros tenían dientes afilados.",
            "is_correct": true
          },
          {
            "text": "Ningún dinosaurio carnívoro tenía dientes afilados.",
            "is_correct": false
          },
          {
            "text": "El estegosaurio tenía dientes afilados.",
            "is_correct": false
          },
          {
            "text": "El tiranosaurio era un dinosaurio carnívoro y tenía dientes afilados.",
            "is_correct": true
          }
        ],
        "explanation": "En los argumentos inductivos por enumeración incompleta las premisas enumeran una serie de casos en los que se verifica un determinado fenómeno (que ciertos dinosaurios como el carnotauro, el velociraptor y el tiranosaurio eran carnívoros y tenían dientes afilados). Y, sobre la base de los casos enumerados, se generaliza hacia todos los casos de ese tipo, i.e., hacia todos los dinosaurios carnívoros."
      },
      {
        "id": "Ejercicio 10",
        "question": "Tras clasificar los distintos tipos de argumentos inductivos establecimos criterios específicos para su evaluación. Atendiendo a esto, determiná qué premisa sirve para fortalecer el siguiente argumento inductivo sin que deje de ser un silogismo inductivo. Seleccioná una opción y escribí el número en la grilla de resolución. El 80% de los dinosaurios carnívoros tenían los dientes afilados. Y dado que el tiranosaurio era un dinosaurio carnívoro, podemos inferir que tenía los dientes afilados.",
        "options": [
          {
            "text": "El tiranosaurio era un dinosaurio que cazaba en grupo.",
            "is_correct": false
          },
          {
            "text": "El 100% de los dinosaurios carnívoros tenían los dientes afilados.",
            "is_correct": false
          },
          {
            "text": "El 90% de los dinosaurios carnívoros tenían los dientes afilados.",
            "is_correct": true
          },
          {
            "text": "Todos los dinosaurios carnívoros utilizaban sus dientes para cazar.",
            "is_correct": false
          }
        ],
        "explanation": "Un silogismo inductivo parte de una generalización estadística y subsume allí un caso. El silogismo inductivo más fuerte es aquel en el que la probabilidad de ocurrencia del fenómeno que se enuncia en dicha generalización es más alta. Recordá que, para que el argumento siga siendo un silogismo inductivo, esa probabilidad no puede ser igual a 1 (es decir, el porcentaje no puede ser del 100%), ya que en ese caso el argumento pasaría a ser deductivo."
      }
    ]
  },
  {
    "id": "tema_4",
    "title": "1º Parcial - Tema 4",
    "questions": [
      {
        "id": "Ejercicio 1",
        "question": "A. Comenzamos la Unidad 1 caracterizando los argumentos. Atendiendo a esto, determiná si el siguiente fragmento es un argumento. Escribí \"SI\" o \"NO\" donde dice \"A\" en la grilla de resolución. La resurrección genética del mamut será exitosa si los científicos pueden combinar el ADN de elefantes modernos con el ADN de mamuts conservado en el hielo. B. Seleccioná la opción que justifica tu respuesta y escribí el número donde dice \"B\" en la grilla de resolución.",
        "options": [
          {
            "text": "porque no es verdadero.",
            "is_correct": false
          },
          {
            "text": "porque contiene más de un enunciado simple.",
            "is_correct": false
          },
          {
            "text": "porque hay un enunciado que pretende dar razones en favor de otro.",
            "is_correct": false
          },
          {
            "text": "porque no se pueden identificar ni premisas ni conclusión.",
            "is_correct": true
          }
        ],
        "explanation": "En este ejercicio se pide que determines si el fragmento es un argumento. Para ello es importante tener presente que en todo argumento hay enunciados que se ofrecen como razones (las premisas) a favor de otro que se pretende concluir o establecer (la conclusión). Recordá que hay ciertas expresiones que, cuando están, nos ayudan a distinguir las premisas de la conclusión. En el libro de la cátedra las denominamos “indicador de premisa” e “indicador de conclusión”. En este caso, no hay indicadores de ningún tipo porque es un enunciado condicional."
      },
      {
        "id": "Ejercicio 2",
        "question": "Dado el siguiente argumento, indicá cuáles son sus premisas. Seleccioná dos opciones y escribí los números en la grilla de resolución. Los velociraptores deben haber sido de los dinosaurios más inteligentes, ya que su cerebro era grande en comparación con su cuerpo. Además, su estructura cerebral indica que tenían buena visión, coordinación y memoria.",
        "options": [
          {
            "text": "Su cerebro era grande y tenían una estructura cerebral compleja.",
            "is_correct": false
          },
          {
            "text": "Los velociraptors fueron de los dinosaurios más inteligentes.",
            "is_correct": false
          },
          {
            "text": "El cerebro de los velociraptors era grande en comparación con su cuerpo.",
            "is_correct": true
          },
          {
            "text": "La estructura cerebral de los velociraptors indica que tenían buena visión, coordinación y memoria.",
            "is_correct": true
          }
        ],
        "explanation": "Para identificar la respuesta es importante recordar que hay ciertas expresiones que, cuando están, nos ayudan a identificar las premisas y la conclusión de un argumento. En el libro las llamamos indicadores de premisa y de conclusión, respectivamente. En el argumento dado hay indicadores de premisas, a saber, \"ya que\" y \"además\". Es importante recordar dos cosas: (i) tanto las premisas como la conclusión se deben enunciar de manera completa, y (ii) los indicadores nunca forman parte de las premisas o la conclusión."
      },
      {
        "id": "Ejercicio 3",
        "question": "Los argumentos están compuestos por enunciados. Estos enunciados pueden combinarse mediante expresiones lógicas dando lugar a enunciados complejos. Dados los siguientes enunciados verdaderos: - Los dinosaurios eran animales terrestres. - Los dinosaurios tenían columna vertebral. Determiná cuál de los siguientes enunciados complejos es verdadero. Seleccioná una opción y escribí el número en la grilla de resolución.",
        "options": [
          {
            "text": "Los dinosaurios eran animales terrestres y no tenían columna vertebral.",
            "is_correct": false
          },
          {
            "text": "Los dinosaurios no eran animales terrestres.",
            "is_correct": false
          },
          {
            "text": "Los dinosaurios eran animales terrestres o tenían columna vertebral.",
            "is_correct": true
          },
          {
            "text": "Si los dinosaurios eran animales terrestres, no tenían columna vertebral.",
            "is_correct": false
          }
        ],
        "explanation": "En este ejercicio tuviste que evaluar el valor veritativo de una conjunción, una negación, una disyunción y un condicional: 1.        Las conjunciones pueden expresarse con “y”, “,”, “además”, “pero”. Las negaciones con “no”, “ no es cierto que”. Los condicionales con “si… entonces” y las disyunciones con “o”, “ o bien … o bien”. 2.        Las conjunciones son verdaderas sólo en el caso en que ambos conyuntos sean verdaderos, esto es, basta que uno de los enunciados combinados por la conjunción sea falso, para que el enunciado complejo resulte falso. 3.        Cuando un enunciado es verdadero, su negación es falsa y, a la inversa, cuando un enunciado es falso, su negación resultará verdadera. 4.        Los enunciados condicionales son falsos únicamente cuando el antecedente es verdadero y el consecuente falso, en el resto de los casos son verdaderos. 5.         Hay dos tipos de disyunciones, las inclusivas y las exclusivas. Expresiones como “o bien… o bien” sugieren que se trata de una disyunción exclusiva, en cambio la mera presencia de una “o” nos conduce a pensar que es inclusiva. Cuando ambas partes son falsas, la disyunción entre ambas es falsa, no importa el tipo de disyunción del cual se trate. Por el contrario, cuando uno de los disyuntos es verdadero y el otro falso, la disyunción es verdadera. El caso en que ambos tipos de disyunciones arrojan valores diferentes es aquel en que ambos disyuntos son verdaderos. Si la disyunción es inclusiva, el enunciado complejo será verdadero; si es exclusiva, será falso. En este ejercicio el enunciado complejo verdadero es la disyunción inclusiva, dado que tiene sus dos disyuntos verdaderos."
      },
      {
        "id": "Ejercicio 4",
        "question": "Al estudiar los enunciados, los distinguimos por su alcance. Dados los siguientes cuatro enunciados determiná cuál de ellos es un enunciado probabilístico. Seleccioná una opción y escribí el número en la grilla de resolución.",
        "options": [
          {
            "text": "Todos los tuátaras son ovíparos.",
            "is_correct": false
          },
          {
            "text": "La probabilidad de que un tuátara que nace sea hembra es de 0.2.",
            "is_correct": true
          },
          {
            "text": "Henry, el tuátara, tiene 92 años.",
            "is_correct": false
          },
          {
            "text": "Algunos tuátaras se alimentan de insectos.",
            "is_correct": false
          }
        ],
        "explanation": "En este ejercicio se te pide que reconozcas un enunciado probabilístico. Un enunciado de este tipo asigna una probabilidad a la ocurrencia de un fenómeno o un conjunto de fenómenos. Así, la respuesta es \"La probabilidad de que un tuátara que nace sea hembra es de 0.2\"."
      },
      {
        "id": "Ejercicio 5",
        "question": "Los enunciados se clasifican según su alcance y ello determina sus condiciones de verdad. Dado el siguiente enunciado determiná en qué situación resultaría verdadero. Seleccioná una opción y escribí el número en la grilla de resolución. Algunos ictiosaurios se alimentan de moluscos.",
        "options": [
          {
            "text": "Si encontramos un animal que es un tiranosaurio y se alimenta de pequeños herbívoros.",
            "is_correct": false
          },
          {
            "text": "Si encontramos un animal que es un ictiosaurio y se alimenta de peces.",
            "is_correct": false
          },
          {
            "text": "Si encontramos un animal que es un ictiosaurio y se alimenta de moluscos.",
            "is_correct": true
          },
          {
            "text": "Si encontramos un animal que es un tiranosaurio y se alimenta de moluscos.",
            "is_correct": false
          }
        ],
        "explanation": "El enunciado propuesto es un enunciado existencial. Para que un enunciado existencial sea verdadero, basta con encontrar un caso de un miembro del conjunto al que se refiere que posea la propiedad asignada. En este caso, la existencia de un animal que sea un ictiosaurio y se alimente de moluscos basta para afirmar que el enunciado es verdadero."
      },
      {
        "id": "Ejercicio 6",
        "question": "Otro modo de clasificar los enunciados es agruparlos en tautologías, contradicciones o contingencias. Identificá cuál de los siguientes enunciados es una contradicción. Seleccioná una opción y escribí el número en la grilla de resolución.",
        "options": [
          {
            "text": "Los mamuts se alimentaban de arbustos o no se alimentaban de arbustos.",
            "is_correct": false
          },
          {
            "text": "Los mamuts se alimentaban de arbustos y no se alimentaban de arbustos.",
            "is_correct": true
          },
          {
            "text": "Los mamuts se alimentaban de arbustos.",
            "is_correct": false
          },
          {
            "text": "Si los mamuts se alimentaban de arbustos entonces se alimentaban de arbustos.",
            "is_correct": false
          }
        ],
        "explanation": "En este ejercicio se pide que reconozcas una contradicción. Para ello es importante tener en cuenta que: - Las tautologías son aquellos enunciados que son necesariamente verdaderos, no son meras verdades, sino que por la forma de la oración, sea como sea el mundo, será verdadera. - Las contradicciones son necesariamente falsas. -A diferencia de las tautologías y las contradicciones, las contingencias son enunciados que tal vez sean verdaderos o tal vez falsos, pero no son necesariamente ninguna de las dos cosas. Aun enunciados que nos parecen obviamente verdaderos serán contingentes si su verdad depende de cuestiones empíricas y no de la estructura misma de la oración. En este ejercicio tenemos una conjunción que resultará necesariamente falsa dado que siempre sucederá que si uno de sus conyuntos es verdadero el otro resultará falso. Y una conjunción con un conyunto verdadero y otro falso será falsa."
      },
      {
        "id": "Ejercicio 7",
        "question": "Al caracterizar los argumentos deductivos introdujimos la noción de validez. Dados los siguientes enunciados, determiná qué conclusión se infiere de modo válido. Si se rescata ADN de mamuts, entonces se pueden clonar. Si se pueden clonar los mamuts, entonces podrían dejar de estar extintos. Seleccioná una opción y escribí el número en la grilla de resolución.",
        "options": [
          {
            "text": "Si los mamuts pueden dejar de estar extintos, entonces se pueden clonar.",
            "is_correct": false
          },
          {
            "text": "Si los mamuts se pueden clonar, entonces se rescata su ADN.",
            "is_correct": false
          },
          {
            "text": "Los mamuts podrían dejar de estar extintos.",
            "is_correct": false
          },
          {
            "text": "Si se rescata ADN de mamuts, entonces los mamuts podrían dejar de estar extintos.",
            "is_correct": true
          }
        ],
        "explanation": "En este ejercicio se te pide que elijas qué enunciado de la lista puede funcionar como la conclusión de un argumento válido dada las premisas propuestas. Los argumentos válidos se pueden reconocer de modos diferentes. Por un lado, porque si suponemos  que las premisas son todas verdaderas, entonces necesariamente hemos de admitir que la conclusión es verdadera también. Por otro lado, podemos atender a su estructura: si reconocemos alguna estructura de las presentadas oportunamente en el material de lectura, tales como el Modus Ponens , Modus Tollens , Silogismo disyuntivo, Instanciación del universal, etc., sabemos que estamos frente a una forma válida. En este caso, la opción 4 es el único enunciado que se puede inferir en forma válida, ya que es un caso de Silogismo Hipotético. Recordá lo siguiente: lo que hace que un argumento sea válido o inválido no es que sus premisas y conclusión sean de hecho  verdaderas o falsas; lo que lo hace válido o inválido es su forma ."
      },
      {
        "id": "Ejercicio 8",
        "question": "Determiná cuál de los siguientes argumentos es inválido. Seleccioná una opción y escribí el número en la grilla de resolución.",
        "options": [
          {
            "text": "Si el megalodón vivió en el Cenozoico, entonces es un tiburón prehistórico. Como el megalodón es un tiburón prehistórico, podemos inferir que vivió en el Cenozoico.",
            "is_correct": true
          },
          {
            "text": "Si el rinoceronte lanudo se alimenta de pasto, entonces el rinoceronte lanudo puede digerir celulosa. Como se alimenta de pasto, queda demostrado entonces que el rinoceronte lanudo puede digerir celulosa.",
            "is_correct": false
          },
          {
            "text": "Si el tiburón megalodón tiene un canal digestivo largo, no tiene que comer con frecuencia. Si no tiene que comer con frecuencia, entonces aguanta más tiempo sin cazar. Luego, si tiene un canal digestivo largo, el megalodón aguanta más tiempo sin cazar.",
            "is_correct": false
          },
          {
            "text": "Todos los felinos prehistóricos tienen garras retráctiles. El tigre dientes de sable es un felino prehistórico. Por consiguiente, tiene garras retráctiles.",
            "is_correct": false
          }
        ],
        "explanation": "En este ejercicio se te pide que reconozcas un argumento inválido. Los argumentos inválidos se pueden reconocer de modos diferentes. Por un lado, porque resulta concebible que las premisas sean verdaderas y la conclusión no. Por otro lado, si atendemos a su estructura , y reconocemos un argumento inductivo o una falacia, sabremos que estamos frente a una forma inválida. En este caso el único argumento inválido es una falacia de afirmación del consecuente. Recordá lo siguiente: lo que hace que un argumento sea válido o inválido no es que sus premisas y conclusión sean de hecho verdaderas o falsas; lo que lo hace válido o inválido es su forma . En particular, un argumento inválido puede tener premisas verdaderas y una conclusión verdadera."
      },
      {
        "id": "Ejercicio 9",
        "question": "Al presentar los argumentos inductivos distinguimos tres tipos: por enumeración incompleta, por analogía y silogismos inductivos. Dado el siguiente conjunto de enunciados: El carnotauro era un dinosaurio carnívoro y tenía dientes afilados. El velociraptor era un dinosaurio carnívoro y tenía dientes afilados. .......................................................................................................................... ............................................................................................................................. Seleccioná cuáles de los siguientes enunciados corresponden respectivamente a la premisa faltante y a la conclusión, de modo tal que resulte un argumento inductivo por enumeración incompleta. Escribí en la grilla de resolución la opción seleccionada como premisa donde dice \"P\" y la opción seleccionada como conclusión donde dice \"C\".",
        "options": [
          {
            "text": "El tiranosaurio era un dinosaurio carnívoro.",
            "is_correct": false
          },
          {
            "text": "Ningún dinosaurio carnívoro tenía dientes afilados.",
            "is_correct": false
          },
          {
            "text": "Todos los dinosaurios carnívoros tenían dientes afilados.",
            "is_correct": true
          },
          {
            "text": "El tiranosaurio era un dinosaurio carnívoro y tenía dientes afilados.",
            "is_correct": true
          },
          {
            "text": "El estegosaurio tenía dientes afilados.",
            "is_correct": false
          }
        ],
        "explanation": "En los argumentos inductivos por enumeración incompleta las premisas enumeran una serie de casos en los que se verifica un determinado fenómeno (que ciertos dinosaurios como el carnotauro, el velociraptor y el tiranosaurio eran carnívoros y tenían dientes afilados). Y, sobre la base de los casos enumerados, se generaliza hacia todos los casos de ese tipo, i.e., hacia todos los dinosaurios."
      },
      {
        "id": "Ejercicio 10",
        "question": "Tras clasificar los distintos tipos de argumentos inductivos establecimos criterios específicos para su evaluación. Atendiendo a esto, determiná qué premisa sirve para fortalecer el siguiente argumento inductivo sin que deje de ser un silogismo inductivo. Seleccioná una opción y escribí el número en la grilla de resolución. El 80% de los dinosaurios carnívoros tenían los dientes afilados. Y dado que el tiranosaurio era un dinosaurio carnívoro, podemos inferir que tenía los dientes afilados.",
        "options": [
          {
            "text": "El tiranosaurio era un dinosaurio que cazaba en grupo.",
            "is_correct": false
          },
          {
            "text": "El 100% de los dinosaurios carnívoros tenían los dientes afilados.",
            "is_correct": false
          },
          {
            "text": "Todos los dinosaurios carnívoros utilizaban sus dientes para cazar.",
            "is_correct": false
          },
          {
            "text": "El 90% de los dinosaurios carnívoros tenían los dientes afilados.",
            "is_correct": true
          }
        ],
        "explanation": "Un silogismo inductivo parte de una generalización estadística y subsume allí un caso. El silogismo inductivo más fuerte es aquel en el que la probabilidad de ocurrencia del fenómeno que se enuncia en dicha generalización es más alta. Recordá que, para que el argumento siga siendo un silogismo inductivo, esa probabilidad no puede ser igual a 1 (es decir, el porcentaje no puede ser del 100%), ya que en ese caso el argumento pasaría a ser deductivo."
      }
    ]
  },
  {
    "id": "tema_5",
    "title": "1º Parcial - Tema 5",
    "questions": [
      {
        "id": "Ejercicio 1",
        "question": "A. Comenzamos la Unidad 1 caracterizando los argumentos. Atendiendo a esto, determiná si el siguiente fragmento es un argumento. Escribí \"SI\" o \"NO\" donde dice \"A\" en la grilla de resolución. Los dinosaurios dominaron la Tierra en el período Mesozoico y son considerados animales prehistóricos. El mamut habitó en el período Cenozoico y es considerado un animal prehistórico. El tigre dientes de sable también es un animal prehistórico del período Cenozoico. B. Seleccioná la opción que justifica tu respuesta y escribí el número donde dice \"B\" en la grilla de resolución.",
        "options": [
          {
            "text": "porque la conclusión es falsa.",
            "is_correct": false
          },
          {
            "text": "porque hay indicadores de premisas.",
            "is_correct": false
          },
          {
            "text": "porque no hay uno o más enunciados que pretendan dar razones en favor de otro.",
            "is_correct": true
          },
          {
            "text": "porque sus premisas son verdaderas.",
            "is_correct": false
          }
        ],
        "explanation": "En este ejercicio se pide que determines si el fragmento es un argumento. Para ello es importante tener presente que en todo argumento hay enunciados que se ofrecen como razones (las premisas) a favor de otro que se pretende concluir o establecer (la conclusión). Recordá que hay ciertas expresiones que, cuando están, nos ayudan a distinguir las premisas de la conclusión. En el libro de la cátedra las denominamos “indicador de premisa” e “indicador de conclusión”. En este caso, no hay indicadores de ningún tipo, es una enumeración."
      },
      {
        "id": "Ejercicio 2",
        "question": "Dado el siguiente argumento, indicá cuáles son sus premisas. Seleccioná dos opciones y escribí los números en la grilla de resolución. La titanoboa es la serpiente más grande que se ha descubierto. Porque, en primer lugar, llegaba a pesar más de una tonelada y, en segundo lugar, medía entre 13 y 15 metros de largo.",
        "options": [
          {
            "text": "La titanoboa llegaba a pesar más de una tonelada.",
            "is_correct": true
          },
          {
            "text": "La titanoboa es la serpiente más grande que se ha descubierto.",
            "is_correct": false
          },
          {
            "text": "La titanoboa medía entre 13 y 15 metros de largo.",
            "is_correct": true
          },
          {
            "text": "Y, en segundo lugar, medía entre 13 y 15 metros de largo.",
            "is_correct": false
          }
        ],
        "explanation": "Para identificar la respuesta es importante recordar que hay ciertas expresiones que, cuando están, nos ayudan a identificar las premisas y la conclusión de un argumento. En el libro las llamamos indicadores de premisa y de conclusión, respectivamente. En el argumento dado hay un indicador de premisas, a saber, \"porque, en primer lugar, .... y, en segundo lugar, ...\". Es importante recordar dos cosas: (i) tanto las premisas como la conclusión se deben enunciar de manera completa, y (ii) los indicadores nunca forman parte de las premisas o la conclusión."
      },
      {
        "id": "Ejercicio 3",
        "question": "Los argumentos están compuestos por enunciados. Estos enunciados pueden combinarse mediante expresiones lógicas dando lugar a enunciados complejos. Dados los siguientes enunciados verdaderos: - El dodo era un ave terrestre. - El dodo era un ave fácil de cazar. Determiná cuál de los siguientes enunciados complejos es verdadero. Seleccioná una opción y escribí el número en la grilla de resolución.",
        "options": [
          {
            "text": "El dodo no era fácil de cazar.",
            "is_correct": false
          },
          {
            "text": "El dodo era un ave terrestre y fácil de cazar.",
            "is_correct": true
          },
          {
            "text": "El dodo no era un ave terrestre o no era fácil de cazar.",
            "is_correct": false
          },
          {
            "text": "Si el dodo era un ave terrestre, no era fácil de cazar.",
            "is_correct": false
          }
        ],
        "explanation": "En este ejercicio tuviste que evaluar el valor veritativo de una conjunción, una negación, una disyunción y un condicional: 1.        Las conjunciones pueden expresarse con “y”, “,”, “además”, “pero”. Las negaciones con “no”, “ no es cierto que”. Los condicionales con “si… entonces” y las disyunciones con “o”, “ o bien … o bien”. 2.        Las conjunciones son verdaderas sólo en el caso en que ambos conyuntos sean verdaderos, esto es, basta que uno de los enunciados combinados por la conjunción sea falso, para que el enunciado complejo resulte falso. 3.        Cuando un enunciado es verdadero, su negación es falsa y, a la inversa, cuando un enunciado es falso, su negación resultará verdadera. 4.        Los enunciados condicionales son falsos únicamente cuando el antecedente es verdadero y el consecuente falso, en el resto de los casos son verdaderos. 5.         Hay dos tipos de disyunciones, las inclusivas y las exclusivas. Expresiones como “o bien… o bien” sugieren que se trata de una disyunción exclusiva, en cambio la mera presencia de una “o” nos conduce a pensar que es inclusiva. Cuando ambas partes son falsas, la disyunción entre ambas es falsa, no importa el tipo de disyunción del cual se trate. Por el contrario, cuando uno de los disyuntos es verdadero y el otro falso, la disyunción es verdadera. El caso en que ambos tipos de disyunciones arrojan valores diferentes es aquel en que ambos disyuntos son verdaderos. Si la disyunción es inclusiva, el enunciado complejo será verdadero; si es exclusiva, será falso. En este ejercicio el enunciado complejo verdadero es la conjunción, dado que tiene sus dos conyuntos verdaderos."
      },
      {
        "id": "Ejercicio 4",
        "question": "Al estudiar los enunciados, los distinguimos por su alcance. Dados los siguientes cuatro enunciados determiná cuál de ellos es un enunciado existencial. Seleccioná una opción y escribí el número en la grilla de resolución.",
        "options": [
          {
            "text": "El 20% de los tuátaras que nacen son hembras.",
            "is_correct": false
          },
          {
            "text": "Todos los tuátaras tienen visión nocturna.",
            "is_correct": false
          },
          {
            "text": "Algunos tuátaras miden más de 60 cm de largo.",
            "is_correct": true
          },
          {
            "text": "Henry, el tuátara, es carnívoro.",
            "is_correct": false
          }
        ],
        "explanation": "En este ejercicio se te pide que reconozcas un enunciado existencial. Un enunciado existencial afirma que algunos miembros de un conjunto poseen cierta propiedad. Así, la respuesta es \"Algunos tuátaras miden más de 60 cm de largo\"."
      },
      {
        "id": "Ejercicio 5",
        "question": "Los enunciados se clasifican según su alcance y ello determina sus condiciones de verdad. Dado el siguiente enunciado determiná en qué situación resultaría falso. Seleccioná una opción y escribí el número en la grilla de resolución. Todos los ictiosaurios son animales marinos.",
        "options": [
          {
            "text": "Si encontramos un animal que es un tiranosaurio y habita en la superficie terrestre.",
            "is_correct": false
          },
          {
            "text": "Si encontramos un animal que es un ictiosaurio y habita en el océano.",
            "is_correct": false
          },
          {
            "text": "Si encontramos un animal que es un tiranosaurio y habita en el océano.",
            "is_correct": false
          },
          {
            "text": "Si encontramos un animal que es un ictiosaurio y habita en la superficie terrestre.",
            "is_correct": true
          }
        ],
        "explanation": "El enunciado propuesto es un enunciado universal. Para que un enunciado universal sea falso, basta con que encontremos un caso de un miembro del conjunto al que se refiere el enunciado que no posea la propiedad asignada. En este caso, el único caso incompatible con el enunciado es aquel en el que un animal es un ictiosaurio y habita la superficie terrestre."
      },
      {
        "id": "Ejercicio 6",
        "question": "Otro modo de clasificar los enunciados es agruparlos en tautologías, contradicciones o contingencias. Identificá cuál de los siguientes enunciados es una contingencia. Seleccioná una opción y escribí el número en la grilla de resolución.",
        "options": [
          {
            "text": "El Argentinosaurus era herbívoro y tenía cuello largo.",
            "is_correct": true
          },
          {
            "text": "El Argentinosaurus era herbívoro o no era herbívoro.",
            "is_correct": false
          },
          {
            "text": "El Argentinosaurus era herbívoro y no era herbívoro.",
            "is_correct": false
          },
          {
            "text": "El Argentinosaurus tenía cuello largo y no tenía cuello largo.",
            "is_correct": false
          }
        ],
        "explanation": "En este ejercicio se pide que reconozcas una contingencia. Para ello es importante tener en cuenta que: - Las tautologías son aquellos enunciados que son necesariamente verdaderos, no son meras verdades, sino que por la forma de la oración, sea como sea el mundo, será verdadera. - Las contradicciones son necesariamente falsas. -A diferencia de las tautologías y las contradicciones, las contingencias son enunciados que tal vez sean verdaderos o tal vez falsos, pero no son necesariamente ninguna de las dos cosas. Aun enunciados que nos parecen obviamente verdaderos serán contingentes si su verdad depende de cuestiones empíricas y no de la estructura misma de la oración. En este ejercicio tenemos que \"El Argentinosaurus era herbívoro y tenía cuello largo\" depende de si efectivamente el Argentinosaurus era herbívoro y de si efectivamente tenía cuello largo. Actualmente sabemos que  el Argentinosaurus tenía ambas características, lo cual hace verdadero al enunciado. Sin embargo, no es difícil imaginar una situación en que la evolución de este animal haya sido distinta y, por ejemplo, que no haya sido hebívoro. Este hecho posible volvería falso al enunciado. Por lo cual, este enunciado es una contingencia: su verdad no es necesaria sino que depende de los hechos."
      },
      {
        "id": "Ejercicio 7",
        "question": "Al caracterizar los argumentos deductivos introdujimos la noción de validez. Dados los siguientes enunciados, determiná qué conclusión se infiere de modo válido. Todas las especies de elefántidos poseen colmillos incisivos. Los mamuts colombinos son una especie de elefántidos. Seleccioná una opción y escribí el número en la grilla de resolución.",
        "options": [
          {
            "text": "Los mamuts colombinos son parientes del elefante asiático, que posee colmillos incisivos.",
            "is_correct": false
          },
          {
            "text": "Los mamuts colombinos poseen colmillos incisivos.",
            "is_correct": true
          },
          {
            "text": "El elefante asiático y el mastodonte americano poseen colmillos incisivos.",
            "is_correct": false
          },
          {
            "text": "El elefante asiático y el mastodonte americano son especies de elefántidos.",
            "is_correct": false
          }
        ],
        "explanation": "En este ejercicio se te pide que elijas qué enunciado de la lista puede funcionar como la conclusión de un argumento válido dada las premisas propuestas. Los argumentos válidos se pueden reconocer de modos diferentes. Por un lado, porque si suponemos  que las premisas son todas verdaderas, entonces necesariamente hemos de admitir que la conclusión es verdadera también. Por otro lado, podemos atender a su estructura: si reconocemos alguna estructura de las presentadas oportunamente en el material de lectura, tales como el Modus Ponens , Modus Tollens , Silogismo disyuntivo, Instanciación del universal, etc., sabemos que estamos frente a una forma válida. En este caso, la opción 2 es el único enunciado que se puede inferir en forma válida, ya que es un caso de Instanciación del universal. Recordá lo siguiente: lo que hace que un argumento sea válido o inválido no es que sus premisas y conclusión sean de hecho verdaderas o falsas; lo que lo hace válido o inválido es su forma ."
      },
      {
        "id": "Ejercicio 8",
        "question": "Determiná cuál de los siguientes argumentos es inválido. Seleccioná una opción y escribí el número en la grilla de resolución.",
        "options": [
          {
            "text": "El tigre dientes de sable tiene garras retráctiles y colmillos. De ahí se sigue que tiene garras retráctiles.",
            "is_correct": false
          },
          {
            "text": "Si el rinoceronte lanudo tiene pelaje, entonces puede sobrevivir el período glacial. Pero el rinoceronte lanudo no puede sobrevivir el período glacial. En consecuencia, el rinoceronte lanudo no tiene pelaje.",
            "is_correct": false
          },
          {
            "text": "Si el tiburón blanco es un depredador ágil, entonces llevó a la extinción al tiburón megalodón. En efecto, el tiburón blanco es un depredador ágil. Luego llevó a la extinción al tiburón megalodón.",
            "is_correct": false
          },
          {
            "text": "Si el león de las cavernas caza peces, entonces es un animal prehistórico marino. Como no es cierto que caza peces, concluimos que no es un animal prehistórico marino.",
            "is_correct": true
          }
        ],
        "explanation": "En este ejercicio se te pide que reconozcas un argumento inválido. Los argumentos inválidos se pueden reconocer de modos diferentes. Por un lado, porque resulta concebible que las premisas sean verdaderas y la conclusión no. Por otro lado, si atendemos a su estructura , y reconocemos un argumento inductivo o una falacia, sabremos que estamos frente a una forma inválida. En este caso el único argumento inválido es una falacia de negación del antecedente. Recordá lo siguiente: lo que hace que un argumento sea válido o inválido no es que sus premisas y conclusión sean de hecho verdaderas o falsas; lo que lo hace válido o inválido es su forma . En particular, un argumento inválido puede tener premisas verdaderas y una conclusión verdadera."
      },
      {
        "id": "Ejercicio 9",
        "question": "Al presentar los argumentos inductivos distinguimos tres tipos: por enumeración incompleta, por analogía y silogismos inductivos. Dado el siguiente conjunto de enunciados: ........................................................................................... ........................................................................................... El estegosaurio era un dinosaurio carnívoro. Seleccioná cuáles de los siguientes enunciados corresponden a las premisas faltantes, de modo tal que el argumento resulte un silogismo inductivo. Escribí en la grilla de resolución las opciones seleccionadas como premisas donde dice \"P1\" y \"P2\".",
        "options": [
          {
            "text": "La mayoría de los dinosaurios que vivían en manadas eran carnívoros.",
            "is_correct": true
          },
          {
            "text": "El estegosaurio era un dinosaurio que vivía en manadas.",
            "is_correct": true
          },
          {
            "text": "El tiranosaurio era un dinosaurio que vivía en manadas y era carnívoro.",
            "is_correct": false
          },
          {
            "text": "El velociraptor era un dinosaurio carnívoro.",
            "is_correct": false
          },
          {
            "text": "Todos los dinosaurios que vivían en manadas eran carnívoros.",
            "is_correct": false
          }
        ],
        "explanation": "Los silogismos inductivos son tales que se formula una generalización estadística o probabilística y se subsume un caso, para inferir que ese caso también responde a lo establecido por la generalización. En este ejercicio, inferimos que el estegosaurio era un dinosaurio carnívoro, dado que vivía en manada. El orden de las premisas P1 y P2 es intercambiable. Tené en cuenta que si la premisa fuera un enunciado universal (\"Todos\" en lugar de \"La mayoría\") el argumento ya no sería inductivo sino deductivo."
      },
      {
        "id": "Ejercicio 10",
        "question": "Tras clasificar los distintos tipos de argumentos inductivos establecimos criterios específicos para su evaluación. Atendiendo a esto, determiná qué premisa sirve para fortalecer el siguiente argumento inductivo sin que deje de ser un argumento inductivo por analogía. Seleccioná una opción y escribí el número en la grilla de resolución. El carnotauro, el velociraptor y el tiranosaurio eran dinosaurios carnívoros que tenían garras afiladas, de lo cual podemos inferir que seguramente el braquiosaurio, que también era un dinosaurio carnívoro, tenía las garras afiladas.",
        "options": [
          {
            "text": "Algunos dinosaurios carnívoros no tenían las garras afiladas.",
            "is_correct": false
          },
          {
            "text": "Todos los dinosaurios carnívoros tenían las garras afiladas.",
            "is_correct": false
          },
          {
            "text": "El 80% de los dinosaurios carnívoros tenían las garras afiladas.",
            "is_correct": false
          },
          {
            "text": "El gigantosaurio era un dinosaurio carnívoro que tenía las garras afiladas.",
            "is_correct": true
          }
        ],
        "explanation": "En un argumento inductivo por analogía, concluimos que un objeto o clase tiene una propiedad por su semejanza con otros objetos o clases que sabemos que tienen esa propiedad. En este caso, el argumento inductivo por analogía más fuerte es aquel en el cual es mayor la cantidad de objetos o clases semejantes que sabemos que tienen la propiedad."
      }
    ]
  },
  {
    "id": "tema_6",
    "title": "1º Parcial - Tema 6",
    "questions": [
      {
        "id": "Ejercicio 1",
        "question": "A. Comenzamos la Unidad 1 caracterizando los argumentos. Atendiendo a esto, determiná si el siguiente fragmento es un argumento. Escribí \"SI\" o \"NO\" donde dice \"A\" en la grilla de resolución. Los dinosaurios dominaron la Tierra en el período Mesozoico y son considerados animales prehistóricos. El mamut habitó en el período Cenozoico y es considerado un animal prehistórico. El tigre dientes de sable también es un animal prehistórico del período Cenozoico. B. Seleccioná la opción que justifica tu respuesta y escribí el número donde dice \"B\" en la grilla de resolución.",
        "options": [
          {
            "text": "porque hay indicadores de premisas.",
            "is_correct": false
          },
          {
            "text": "porque no hay uno o más enunciados que pretendan dar razones en favor de otro.",
            "is_correct": true
          },
          {
            "text": "porque sus premisas son verdaderas.",
            "is_correct": false
          },
          {
            "text": "porque la conclusión es falsa.",
            "is_correct": false
          }
        ],
        "explanation": "En este ejercicio se pide que determines si el fragmento es un argumento. Para ello es importante tener presente que en todo argumento hay enunciados que se ofrecen como razones (las premisas) a favor de otro que se pretende concluir o establecer (la conclusión). Recordá que hay ciertas expresiones que, cuando están, nos ayudan a distinguir las premisas de la conclusión. En el libro de la cátedra las denominamos “indicador de premisa” e “indicador de conclusión”. En este caso, no hay indicadores de ningún tipo, es una enumeración."
      },
      {
        "id": "Ejercicio 2",
        "question": "Dado el siguiente argumento, indicá cuáles son sus premisas. Seleccioná dos opciones y escribí los números en la grilla de resolución. La titanoboa es la serpiente más grande que se ha descubierto. Porque, en primer lugar, llegaba a pesar más de una tonelada y, en segundo lugar, medía entre 13 y 15 metros de largo.",
        "options": [
          {
            "text": "Y, en segundo lugar, medía entre 13 y 15 metros de largo.",
            "is_correct": false
          },
          {
            "text": "La titanoboa llegaba a pesar más de una tonelada.",
            "is_correct": true
          },
          {
            "text": "La titanoboa es la serpiente más grande que se ha descubierto.",
            "is_correct": false
          },
          {
            "text": "La titanoboa medía entre 13 y 15 metros de largo.",
            "is_correct": true
          }
        ],
        "explanation": "Para identificar la respuesta es importante recordar que hay ciertas expresiones que, cuando están, nos ayudan a identificar las premisas y la conclusión de un argumento. En el libro las llamamos indicadores de premisa y de conclusión, respectivamente. En el argumento dado hay un indicador de premisas, a saber, \"porque, en primer lugar, .... y, en segundo lugar, ...\". Es importante recordar dos cosas: (i) tanto las premisas como la conclusión se deben enunciar de manera completa, y (ii) los indicadores nunca forman parte de las premisas o la conclusión."
      },
      {
        "id": "Ejercicio 3",
        "question": "Los argumentos están compuestos por enunciados. Estos enunciados pueden combinarse mediante expresiones lógicas dando lugar a enunciados complejos. Dados los siguientes enunciados verdaderos: - El dodo era un ave fácil de cazar. - El dodo era un ave terrestre. Determiná cuál de los siguientes enunciados complejos es verdadero. Seleccioná una opción y escribí el número en la grilla de resolución.",
        "options": [
          {
            "text": "El dodo era un ave terrestre y fácil de cazar.",
            "is_correct": true
          },
          {
            "text": "El dodo no era fácil de cazar.",
            "is_correct": false
          },
          {
            "text": "Si el dodo era un ave terrestre, no era fácil de cazar.",
            "is_correct": false
          },
          {
            "text": "El dodo no era un ave terrestre o no era fácil de cazar.",
            "is_correct": false
          }
        ],
        "explanation": "En este ejercicio tuviste que evaluar el valor veritativo de una conjunción, una negación, una disyunción y un condicional: 1.        Las conjunciones pueden expresarse con “y”, “,”, “además”, “pero”. Las negaciones con “no”, “ no es cierto que”. Los condicionales con “si… entonces” y las disyunciones con “o”, “ o bien … o bien”. 2.        Las conjunciones son verdaderas sólo en el caso en que ambos conyuntos sean verdaderos, esto es, basta que uno de los enunciados combinados por la conjunción sea falso, para que el enunciado complejo resulte falso. 3.        Cuando un enunciado es verdadero, su negación es falsa y, a la inversa, cuando un enunciado es falso, su negación resultará verdadera. 4.        Los enunciados condicionales son falsos únicamente cuando el antecedente es verdadero y el consecuente falso, en el resto de los casos son verdaderos. 5.         Hay dos tipos de disyunciones, las inclusivas y las exclusivas. Expresiones como “o bien… o bien” sugieren que se trata de una disyunción exclusiva, en cambio la mera presencia de una “o” nos conduce a pensar que es inclusiva. Cuando ambas partes son falsas, la disyunción entre ambas es falsa, no importa el tipo de disyunción del cual se trate. Por el contrario, cuando uno de los disyuntos es verdadero y el otro falso, la disyunción es verdadera. El caso en que ambos tipos de disyunciones arrojan valores diferentes es aquel en que ambos disyuntos son verdaderos. Si la disyunción es inclusiva, el enunciado complejo será verdadero; si es exclusiva, será falso. En este ejercicio el enunciado complejo verdadero es la conjunción, dado que tiene sus dos conyuntos verdaderos."
      },
      {
        "id": "Ejercicio 4",
        "question": "Al estudiar los enunciados, los distinguimos por su alcance. Dados los siguientes cuatro enunciados determiná cuál de ellos es un enunciado existencial. Seleccioná una opción y escribí el número en la grilla de resolución.",
        "options": [
          {
            "text": "Todos los tuátaras tienen visión nocturna.",
            "is_correct": false
          },
          {
            "text": "El 20% de los tuátaras que nacen son hembras.",
            "is_correct": false
          },
          {
            "text": "Henry, el tuátara, es carnívoro.",
            "is_correct": false
          },
          {
            "text": "Algunos tuátaras miden más de 60 cm de largo.",
            "is_correct": true
          }
        ],
        "explanation": "En este ejercicio se te pide que reconozcas un enunciado existencial. Un enunciado existencial afirma que algunos miembros de un conjunto poseen cierta propiedad. Así, la respuesta es \"Algunos tuátaras miden más de 60 cm de largo\"."
      },
      {
        "id": "Ejercicio 5",
        "question": "Los enunciados se clasifican según su alcance y ello determina sus condiciones de verdad. Dado el siguiente enunciado determiná en qué situación resultaría falso. Seleccioná una opción y escribí el número en la grilla de resolución. Todos los ictiosaurios son animales marinos.",
        "options": [
          {
            "text": "Si encontramos un animal que es un ictiosaurio y habita en la superficie terrestre.",
            "is_correct": true
          },
          {
            "text": "Si encontramos un animal que es un tiranosaurio y habita en el océano.",
            "is_correct": false
          },
          {
            "text": "Si encontramos un animal que es un tiranosaurio y habita en la superficie terrestre.",
            "is_correct": false
          },
          {
            "text": "Si encontramos un animal que es un ictiosaurio y habita en el océano.",
            "is_correct": false
          }
        ],
        "explanation": "El enunciado propuesto es un enunciado universal. Para que un enunciado universal sea falso, basta con que encontremos un caso de un miembro del conjunto al que se refiere el enunciado que no posea la propiedad asignada. En este caso, el único caso incompatible con el enunciado es aquel en el que un animal es un ictiosaurio y habita la superficie terrestre."
      },
      {
        "id": "Ejercicio 6",
        "question": "Otro modo de clasificar los enunciados es agruparlos en tautologías, contradicciones o contingencias. Identificá cuál de los siguientes enunciados es una contingencia. Seleccioná una opción y escribí el número en la grilla de resolución.",
        "options": [
          {
            "text": "El Argentinosaurus tenía cuello largo y no tenía cuello largo.",
            "is_correct": false
          },
          {
            "text": "El Argentinosaurus era herbívoro y no era herbívoro.",
            "is_correct": false
          },
          {
            "text": "El Argentinosaurus era herbívoro y tenía cuello largo.",
            "is_correct": true
          },
          {
            "text": "El Argentinosaurus era herbívoro o no era herbívoro.",
            "is_correct": false
          }
        ],
        "explanation": "En este ejercicio se pide que reconozcas una contingencia. Para ello es importante tener en cuenta que: - Las tautologías son aquellos enunciados que son necesariamente verdaderos, no son meras verdades, sino que por la forma de la oración, sea como sea el mundo, será verdadera. - Las contradicciones son necesariamente falsas. -A diferencia de las tautologías y las contradicciones, las contingencias son enunciados que tal vez sean verdaderos o tal vez falsos, pero no son necesariamente ninguna de las dos cosas. Aun enunciados que nos parecen obviamente verdaderos serán contingentes si su verdad depende de cuestiones empíricas y no de la estructura misma de la oración. En este ejercicio tenemos que \"El Argentinosaurus era herbívoro y tenía cuello largo\" depende de si efectivamente el Argentinosaurus era herbívoro y de si efectivamente tenía cuello largo. Actualmente sabemos que  el Argentinosaurus tenía ambas características, lo cual hace verdadero al enunciado. Sin embargo, no es difícil imaginar una situación en que la evolución de este animal haya sido distinta y, por ejemplo, que no haya sido hebívoro. Este hecho posible volvería falso al enunciado. Por lo cual, este enunciado es una contingencia: su verdad no es necesaria sino que depende de los hechos."
      },
      {
        "id": "Ejercicio 7",
        "question": "Al caracterizar los argumentos deductivos introdujimos la noción de validez. Dados los siguientes enunciados, determiná qué conclusión se infiere de modo válido. Todas las especies de elefántidos poseen colmillos incisivos. Los mamuts colombinos son una especie de elefántidos. Seleccioná una opción y escribí el número en la grilla de resolución.",
        "options": [
          {
            "text": "Los mamuts colombinos poseen colmillos incisivos.",
            "is_correct": true
          },
          {
            "text": "Los mamuts colombinos son parientes del elefante asiático, que posee colmillos incisivos.",
            "is_correct": false
          },
          {
            "text": "El elefante asiático y el mastodonte americano son especies de elefántidos.",
            "is_correct": false
          },
          {
            "text": "El elefante asiático y el mastodonte americano poseen colmillos incisivos.",
            "is_correct": false
          }
        ],
        "explanation": "En este ejercicio se te pide que elijas qué enunciado de la lista puede funcionar como la conclusión de un argumento válido dada las premisas propuestas. Los argumentos válidos se pueden reconocer de modos diferentes. Por un lado, porque si suponemos  que las premisas son todas verdaderas, entonces necesariamente hemos de admitir que la conclusión es verdadera también. Por otro lado, podemos atender a su estructura: si reconocemos alguna estructura de las presentadas oportunamente en el material de lectura, tales como el Modus Ponens , Modus Tollens , Silogismo disyuntivo, Instanciación del universal, etc., sabemos que estamos frente a una forma válida. En este caso, la opción 1 es el único enunciado que se puede inferir en forma válida, ya que es un caso de Instanciación del universal. Recordá lo siguiente: lo que hace que un argumento sea válido o inválido no es que sus premisas y conclusión sean de hecho verdaderas o falsas; lo que lo hace válido o inválido es su forma ."
      },
      {
        "id": "Ejercicio 8",
        "question": "Determiná cuál de los siguientes argumentos es inválido. Seleccioná una opción y escribí el número en la grilla de resolución.",
        "options": [
          {
            "text": "El tigre dientes de sable tiene garras retráctiles y colmillos. De ahí se sigue que tiene garras retráctiles.",
            "is_correct": false
          },
          {
            "text": "Si el rinoceronte lanudo tiene pelaje, entonces puede sobrevivir el período glacial. Pero el rinoceronte lanudo no puede sobrevivir el período glacial. En consecuencia, el rinoceronte lanudo no tiene pelaje.",
            "is_correct": false
          },
          {
            "text": "Si el león de las cavernas caza peces, entonces es un animal prehistórico marino. Como no es cierto que caza peces, concluimos que no es un animal prehistórico marino.",
            "is_correct": true
          },
          {
            "text": "Si el tiburón blanco es un depredador ágil, entonces llevó a la extinción al tiburón megalodón. En efecto, el tiburón blanco es un depredador ágil. Luego llevó a la extinción al tiburón megalodón.",
            "is_correct": false
          }
        ],
        "explanation": "En este ejercicio se te pide que reconozcas un argumento inválido. Los argumentos inválidos se pueden reconocer de modos diferentes. Por un lado, porque resulta concebible que las premisas sean verdaderas y la conclusión no. Por otro lado, si atendemos a su estructura , y reconocemos un argumento inductivo o una falacia, sabremos que estamos frente a una forma inválida. En este caso el único argumento inválido es una falacia de negación del antecedente. Recordá lo siguiente: lo que hace que un argumento sea válido o inválido no es que sus premisas y conclusión sean de hecho verdaderas o falsas; lo que lo hace válido o inválido es su forma . En particular, un argumento inválido puede tener premisas verdaderas y una conclusión verdadera."
      },
      {
        "id": "Ejercicio 9",
        "question": "Al presentar los argumentos inductivos distinguimos tres tipos: por enumeración incompleta, por analogía y silogismos inductivos. Dado el siguiente conjunto de enunciados: ........................................................................................... ........................................................................................... El estegosaurio era un dinosaurio carnívoro. Seleccioná cuáles de los siguientes enunciados corresponden a las premisas faltantes, de modo tal que el argumento resulte un silogismo inductivo. Escribí en la grilla de resolución las opciones seleccionadas como premisas donde dice \"P1\" y \"P2\".",
        "options": [
          {
            "text": "El velociraptor era un dinosaurio carnívoro.",
            "is_correct": false
          },
          {
            "text": "El tiranosaurio era un dinosaurio que vivía en manadas y era carnívoro.",
            "is_correct": false
          },
          {
            "text": "El estegosaurio era un dinosaurio que vivía en manadas.",
            "is_correct": true
          },
          {
            "text": "La mayoría de los dinosaurios que vivían en manadas eran carnívoros.",
            "is_correct": true
          },
          {
            "text": "Todos los dinosaurios que vivían en manadas eran carnívoros.",
            "is_correct": false
          }
        ],
        "explanation": "Los silogismos inductivos son tales que se formula una generalización estadística o probabilística y se subsume un caso, para inferir que ese caso también responde a lo establecido por la generalización. En este ejercicio, inferimos que el estegosaurio era un dinosaurio carnívoro, dado que vivía en manada. El orden de las premisas P1 y P2 es intercambiable. Tené en cuenta que si la premisa fuera un enunciado universal (\"Todos\" en lugar de \"La mayoría\") el argumento ya no sería inductivo sino deductivo."
      },
      {
        "id": "Ejercicio 10",
        "question": "Tras clasificar los distintos tipos de argumentos inductivos establecimos criterios específicos para su evaluación. Atendiendo a esto, determiná qué premisa sirve para fortalecer el siguiente argumento inductivo sin que deje de ser un argumento inductivo por analogía. Seleccioná una opción y escribí el número en la grilla de resolución. El carnotauro, el velociraptor y el tiranosaurio eran dinosaurios carnívoros que tenían garras afiladas, de lo cual podemos inferir que seguramente el braquiosaurio, que también era un dinosaurio carnívoro, tenía las garras afiladas.",
        "options": [
          {
            "text": "El gigantosaurio era un dinosaurio carnívoro que tenía las garras afiladas.",
            "is_correct": true
          },
          {
            "text": "El 80% de los dinosaurios carnívoros tenían las garras afiladas.",
            "is_correct": false
          },
          {
            "text": "Algunos dinosaurios carnívoros no tenían las garras afiladas.",
            "is_correct": false
          },
          {
            "text": "Todos los dinosaurios carnívoros tenían las garras afiladas.",
            "is_correct": false
          }
        ],
        "explanation": "En un argumento inductivo por analogía, concluimos que un objeto o clase tiene una propiedad por su semejanza con otros objetos o clases que sabemos que tienen esa propiedad. En este caso, el argumento inductivo por analogía más fuerte es aquel en el cual es mayor la cantidad de objetos o clases semejantes que sabemos que tienen la propiedad."
      }
    ]
  },
  {
    "id": "tema_7",
    "title": "1º Parcial - Tema 7",
    "questions": [
      {
        "id": "Ejercicio 1",
        "question": "A. Comenzamos la Unidad 1 caracterizando los argumentos. Atendiendo a esto, determiná si el siguiente fragmento es un argumento. Escribí \"SI\" o \"NO\" donde dice \"A\" en la grilla de resolución. Si el tiranosaurio rex tenía órganos sensoriales desarrollados, entonces era un depredador. Sabemos que sus sentidos de olfato y visión eran muy agudos, lo cual justifica considerarlo un depredador. B. Seleccioná la opción que justifica tu respuesta y escribí el número donde dice \"B\" en la grilla de resolución.",
        "options": [
          {
            "text": "porque es inductivamente válido.",
            "is_correct": false
          },
          {
            "text": "porque la conclusión es verdadera.",
            "is_correct": false
          },
          {
            "text": "porque hay más de un enunciado.",
            "is_correct": false
          },
          {
            "text": "porque se ofrecen premisas en favor de una conclusión.",
            "is_correct": true
          }
        ],
        "explanation": "En este ejercicio se pide que determines si el fragmento es un argumento. Para ello es importante tener presente que en todo argumento hay enunciados que se ofrecen como razones (las premisas) a favor de otro que se pretende concluir o establecer (la conclusión). Recordá que hay ciertas expresiones que, cuando están, nos ayudan a distinguir las premisas de la conclusión. En el libro de la cátedra las denominamos “indicador de premisa” e “indicador de conclusión”. En este caso, \"lo cual justifica\" es un indicador de conclusión."
      },
      {
        "id": "Ejercicio 2",
        "question": "Dado el siguiente argumento, indicá cuáles son sus premisas. Seleccioná dos opciones y escribí los números en la grilla de resolución. El rinoceronte gigante llegó a medir hasta 7 metros de altura. Por otro lado, llegó a pesar hasta 20 toneladas. De esto se sigue que sea considerado el mamífero más grande de la historia.",
        "options": [
          {
            "text": "Llegó a pesar hasta 20 toneladas.",
            "is_correct": false
          },
          {
            "text": "El rinoceronte gigante es considerado el mamífero más grande de la historia.",
            "is_correct": false
          },
          {
            "text": "El rinoceronte gigante llegó a medir hasta 7 metros de altura.",
            "is_correct": true
          },
          {
            "text": "El rinoceronte gigante llegó a pesar hasta 20 toneladas.",
            "is_correct": true
          }
        ],
        "explanation": "Para identificar la respuesta es importante recordar que hay ciertas expresiones que, cuando están, nos ayudan a identificar las premisas y la conclusión de un argumento. En el libro las llamamos indicadores de premisa y de conclusión, respectivamente. En el argumento dado hay un indicador de conclusión, a saber, \"de esto se sigue que\". Es importante recordar dos cosas: (i) tanto las premisas como la conclusión se deben enunciar de manera completa, y (ii) los indicadores nunca forman parte de las premisas o la conclusión."
      },
      {
        "id": "Ejercicio 3",
        "question": "Los argumentos están compuestos por enunciados. Estos enunciados pueden combinarse mediante expresiones lógicas dando lugar a enunciados complejos. Dados los siguientes enunciados verdaderos: - El tiburón megalodón cazaba cerca de las costas. - El tiburón megalodón habitaba aguas cálidas. Determiná cuál de los siguientes enunciados complejos es verdadero. Seleccioná una opción y escribí el número en la grilla de resolución.",
        "options": [
          {
            "text": "El tiburón megalodón no cazaba cerca de las costas o no habitaba aguas cálidas.",
            "is_correct": false
          },
          {
            "text": "Si el tiburón megalodón cazaba cerca de las costas, habitaba aguas cálidas.",
            "is_correct": true
          },
          {
            "text": "El tiburón megalodón no cazaba cerca de las costas.",
            "is_correct": false
          },
          {
            "text": "El tiburón megalodón no cazaba cerca de las costas y habitaba aguas cálidas.",
            "is_correct": false
          }
        ],
        "explanation": "En este ejercicio tuviste que evaluar el valor veritativo de una conjunción, una negación, una disyunción y un condicional: 1.        Las conjunciones pueden expresarse con “y”, “,”, “además”, “pero”. Las negaciones con “no”, “ no es cierto que”. Los condicionales con “si… entonces” y las disyunciones con “o”, “ o bien … o bien”. 2.        Las conjunciones son verdaderas sólo en el caso en que ambos conyuntos sean verdaderos, esto es, basta que uno de los enunciados combinados por la conjunción sea falso, para que el enunciado complejo resulte falso. 3.        Cuando un enunciado es verdadero, su negación es falsa y, a la inversa, cuando un enunciado es falso, su negación resultará verdadera. 4.        Los enunciados condicionales son falsos únicamente cuando el antecedente es verdadero y el consecuente falso, en el resto de los casos son verdaderos. 5.         Hay dos tipos de disyunciones, las inclusivas y las exclusivas. Expresiones como “o bien… o bien” sugieren que se trata de una disyunción exclusiva, en cambio la mera presencia de una “o” nos conduce a pensar que es inclusiva. Cuando ambas partes son falsas, la disyunción entre ambas es falsa, no importa el tipo de disyunción del cual se trate. Por el contrario, cuando uno de los disyuntos es verdadero y el otro falso, la disyunción es verdadera. El caso en que ambos tipos de disyunciones arrojan valores diferentes es aquel en que ambos disyuntos son verdaderos. Si la disyunción es inclusiva, el enunciado complejo será verdadero; si es exclusiva, será falso. En este ejercicio el enunciado complejo verdadero es el condicional, dado que tiene antecedente y consecuente verdaderos."
      },
      {
        "id": "Ejercicio 4",
        "question": "Al estudiar los enunciados, los distinguimos por su alcance. Dados los siguientes cuatro enunciados determiná cuál de ellos es un enunciado singular. Seleccioná una opción y escribí el número en la grilla de resolución.",
        "options": [
          {
            "text": "Henry, el tuátara, tuvo más de 45 crías.",
            "is_correct": true
          },
          {
            "text": "Algunos tuátaras llegan a la madurez sexual después de los 15 años de edad.",
            "is_correct": false
          },
          {
            "text": "El 70% de los tuátaras vive más de 80 años.",
            "is_correct": false
          },
          {
            "text": "Todos los tuátaras tienen un muy buen sentido del olfato.",
            "is_correct": false
          }
        ],
        "explanation": "En este ejercicio se te pide que reconozcas un enunciado singular. Un enunciado singular afirma algo acerca de un individuo en particular. Así, la respuesta aquí es \"Henry. el tuátara, tuvo más de 45 crías\"."
      },
      {
        "id": "Ejercicio 5",
        "question": "Los enunciados se clasifican según su alcance y ello determina sus condiciones de verdad. Dado el siguiente enunciado determiná en qué situación resultaría verdadero. Seleccioná una opción y escribí el número en la grilla de resolución. Algunos ictiosaurios tienen una aleta dorsal.",
        "options": [
          {
            "text": "Si encontramos un animal que es un tiranosaurio y no tiene una aleta dorsal.",
            "is_correct": false
          },
          {
            "text": "Si encontramos un animal que es un ictiosaurio y carece de aleta dorsal.",
            "is_correct": false
          },
          {
            "text": "Si encontramos un animal que es un ictiosaurio y tiene una aleta dorsal.",
            "is_correct": true
          },
          {
            "text": "Si encontramos un animal que es un plesiosaurio y tiene una aleta dorsal.",
            "is_correct": false
          }
        ],
        "explanation": "El enunciado propuesto es un enunciado existencial. Para que un enunciado existencial sea verdadero, basta con encontrar un caso de un miembro del conjunto al que se refiere que posea la propiedad asignada. En este caso, la existencia de un animal que sea un ictiosaurio y tenga una aleta dorsal basta para afirmar que el enunciado es verdadero."
      },
      {
        "id": "Ejercicio 6",
        "question": "Otro modo de clasificar los enunciados es agruparlos en tautologías, contradicciones o contingencias. Identificá cuál de los siguientes enunciados es una tautología. Seleccioná una opción y escribí el número en la grilla de resolución.",
        "options": [
          {
            "text": "El dodo se extinguió hace cientos de años.",
            "is_correct": false
          },
          {
            "text": "El dodo era un ave terrestre o no era un ave terrestre.",
            "is_correct": true
          },
          {
            "text": "El dodo era un ave terrestre y no era un ave terrestre.",
            "is_correct": false
          },
          {
            "text": "El dodo era un ave terrestre y con alas muy cortas.",
            "is_correct": false
          }
        ],
        "explanation": "En este ejercicio se pide que reconozcas una tautología. Para ello es importante tener en cuenta que: - Las tautologías son aquellos enunciados que son necesariamente verdaderos, no son meras verdades, sino que por la forma de la oración, sea como sea el mundo, será verdadera. - Las contradicciones son necesariamente falsas. -A diferencia de las tautologías y las contradicciones, las contingencias son enunciados que tal vez sean verdaderos o tal vez falsos, pero no son necesariamente ninguna de las dos cosas. Aun enunciados que nos parecen obviamente verdaderos serán contingentes si su verdad depende de cuestiones empíricas y no de la estructura misma de la oración. En este ejercicio tenemos una disyunción que necesariamente será verdadera debido a que siempre tendrá al menos un disyunto verdadero. En efecto, si el dodo era un ave terrestre, el disyunto de la izquierda es verdadero; y si el dodo no era un ave terrestre, el disyunto de la derecha será verdadero. Así, independientemente de cómo era de hecho el dodo, el enunciado en cuestión será necesariamente verdadero."
      },
      {
        "id": "Ejercicio 7",
        "question": "Al caracterizar los argumentos deductivos introdujimos la noción de validez. Dados los siguientes enunciados, determiná qué conclusión se infiere de modo válido. Los tigres dientes de sable usan sus colmillos para triturar o para asfixiar. Pero los tigres dientes de sable no usan sus colmillos para triturar. Seleccioná una opción y escribí el número en la grilla de resolución.",
        "options": [
          {
            "text": "Los tigres dientes de sable usan sus colmillos para asfixiar.",
            "is_correct": true
          },
          {
            "text": "Los tigres dientes de sable no usan sus colmillos para asfixiar.",
            "is_correct": false
          },
          {
            "text": "Los tigres dientes de sable usan sus colmillos para triturar.",
            "is_correct": false
          },
          {
            "text": "Si los tigres dientes de sable no usan sus colmillos para triturar, los usan para apuñalar.",
            "is_correct": false
          }
        ],
        "explanation": "En este ejercicio se te pide que elijas qué enunciado de la lista puede funcionar como la conclusión de un argumento válido dada las premisas propuestas. Los argumentos válidos se pueden reconocer de modos diferentes. Los argumentos válidos se pueden reconocer de modos diferentes. Por un lado, porque si suponemos  que las premisas son todas verdaderas, entonces necesariamente hemos de admitir que la conclusión es verdadera también. Por otro lado, podemos atender a su estructura: si reconocemos alguna estructura de las presentadas oportunamente en el material de lectura, tales como el Modus Ponens , Modus Tollens , Silogismo disyuntivo, Instanciación del universal, etc., sabemos que estamos frente a una forma válida. En este caso, la opción 1 es el único enunciado que se puede inferir en forma válida, ya que es un caso de Silogismo disyuntivo. Recordá lo siguiente: lo que hace que un argumento sea válido o inválido no es que sus premisas y conclusión sean de hecho  verdaderas o falsas; lo que lo hace válido o inválido es su forma ."
      },
      {
        "id": "Ejercicio 8",
        "question": "Determiná cuál de los siguientes argumentos es inválido. Seleccioná una opción y escribí el número en la grilla de resolución.",
        "options": [
          {
            "text": "El león de las cavernas vive en cavernas o sus restos se encuentran en cavernas. Puesto que no es cierto que vive en cavernas, queda demostrado que los restos del león de las cavernas se encuentran en cavernas.",
            "is_correct": false
          },
          {
            "text": "Si el megalodón es pariente cercano del tiburón blanco, entonces es un depredador marino. Y es pariente cercano del tiburón blanco. Se sigue que el megalodón es un depredador marino.",
            "is_correct": false
          },
          {
            "text": "El rinoceronte lanudo come carne o come pasto. En consecuencia, come pasto.",
            "is_correct": true
          },
          {
            "text": "Si el rinoceronte lanudo come carne, entonces digiere huesos. Pero el rinoceronte lanudo no digiere huesos. Luego, no come carne.",
            "is_correct": false
          }
        ],
        "explanation": "En este ejercicio se te pide que reconozcas un argumento inválido. Los argumentos inválidos se pueden reconocer de modos diferentes. Por un lado, porque resulta concebible que las premisas sean verdaderas y la conclusión no. Por otro lado, si atendemos a su estructura , y reconocemos un argumento inductivo o una falacia, sabremos que estamos frente a una forma inválida. En este caso el único argumento inválido es de la forma A o B. En consecuencia, B . Recordá lo siguiente: lo que hace que un argumento sea válido o inválido no es que sus premisas y conclusión sean de hecho verdaderas o falsas; lo que lo hace válido o inválido es su forma . En particular, un argumento inválido puede tener premisas verdaderas y una conclusión verdadera."
      },
      {
        "id": "Ejercicio 9",
        "question": "Al presentar los argumentos inductivos distinguimos tres tipos: por enumeración incompleta, por analogía y silogismos inductivos. Dado el siguiente conjunto de enunciados: El mamut era un mamífero prehistórico y tenía colmillos largos. El mastodonte era un mamífero prehistórico y tenía colmillos largos. .................................................................................................. .................................................................................................... Seleccioná cuáles de los siguientes enunciados corresponden respectivamente a la premisa faltante y a la conclusión, de modo tal que resulte un argumento inductivo por analogía. Escribí en la grilla de resolución la opción seleccionada como premisa donde dice \"P\" y la opción seleccionada como conclusión donde dice \"C\".",
        "options": [
          {
            "text": "El rinoceronte lanudo era un mamífero prehistórico.",
            "is_correct": true
          },
          {
            "text": "El rinoceronte lanudo tenía colmillos largos.",
            "is_correct": true
          },
          {
            "text": "La mayoría de los mamíferos prehistóricos tenían colmillos largos.",
            "is_correct": false
          },
          {
            "text": "Todos los mamíferos prehistóricos tenían colmillos largos.",
            "is_correct": false
          },
          {
            "text": "El mamut era un mamífero prehistórico.",
            "is_correct": false
          }
        ],
        "explanation": "Los argumentos inductivos por analogía son aquellos en que comparamos varios casos y constatamos que los mismos se asemejan en una o más propiedades, para inferir, a partir de ahí, que uno de esos casos tiene además otra propiedad que los otros comparten. En este caso, partimos de comparar tres animales (el mamut, el mastodonte y el rinoceronte lanudo) y constatar que se asemejan en ciertos aspectos, para concluir que uno de esos animales (el rinoceronte lanudo) también se asemeja en un nuevo aspecto que los otros dos (el mamut y el mastodonte) comparten. Hay dos soluciones posibles para este ejercicio. Una solución es tomar \"el rinoceronte lanudo era un mamífero prehistórico\" como premisa y \"el rinoceronte lanudo tenía colmillos largos\" como conclusión. La otra solución es, a la inversa, tomar \"el rinoceronte lanudo era un mamífero prehistórico\" como conclusión y \"el rinoceronte lanudo tenía colmillos largos\" como premisa."
      },
      {
        "id": "Ejercicio 10",
        "question": "Tras clasificar los distintos tipos de argumentos inductivos establecimos criterios específicos para su evaluación. Atendiendo a esto, determiná qué premisa sirve para fortalecer el siguiente argumento inductivo sin que deje de ser un argumento inductivo por enumeración incompleta. Seleccioná una opción y escribí el número en la grilla de resolución. El tiranosaurio y el estegosaurio, al igual que el braquiosaurio, vivían en manada. Por ende, es probable que todos los animales carnívoros vivieran en manadas, dado que el tiranosaurio, el estegosaurio y el braquiosaurio eran animales carnívoros.",
        "options": [
          {
            "text": "El tiranosaurio, el estegosaurio y el braquiosaurio eran las únicas tres especies de anímales carnívoros.",
            "is_correct": false
          },
          {
            "text": "El gigantosaurio vivía en manada.",
            "is_correct": false
          },
          {
            "text": "El velociraptor, que era un animal carnívoro, vivía en manada.",
            "is_correct": true
          },
          {
            "text": "El megaterio no era un animal carnívoro.",
            "is_correct": false
          }
        ],
        "explanation": "Un argumento inductivo por enumeración incompleta parte de la presencia de una propiedad en una muestra y concluye la presencia de esa propiedad en todo el conjunto al cual los casos de esa muestra pertenecen. El argumento inductivo más fuerte será aquel en el cual la muestra a partir de la cual se generaliza en la conclusión sea mayor. Ten en cuenta que, para que el argumento siga siendo inductivo, la muestra no puede ser igual al conjunto sobre el que se realiza la generalización."
      }
    ]
  },
  {
    "id": "tema_8",
    "title": "1º Parcial - Tema 8",
    "questions": [
      {
        "id": "Ejercicio 1",
        "question": "A. Comenzamos la Unidad 1 caracterizando los argumentos. Atendiendo a esto, determiná si el siguiente fragmento es un argumento. Escribí \"SI\" o \"NO\" donde dice \"A\" en la grilla de resolución. Si el tiranosaurio rex tenía órganos sensoriales desarrollados, entonces era un depredador. Sabemos que sus sentidos de olfato y visión eran muy agudos, lo cual justifica considerarlo un depredador. B. Seleccioná la opción que justifica tu respuesta y escribí el número donde dice \"B\" en la grilla de resolución.",
        "options": [
          {
            "text": "porque la conclusión es verdadera.",
            "is_correct": false
          },
          {
            "text": "porque hay más de un enunciado.",
            "is_correct": false
          },
          {
            "text": "porque se ofrecen premisas en favor de una conclusión.",
            "is_correct": true
          },
          {
            "text": "porque es inductivamente válido.",
            "is_correct": false
          }
        ],
        "explanation": "En este ejercicio se pide que determines si el fragmento es un argumento. Para ello es importante tener presente que en todo argumento hay enunciados que se ofrecen como razones (las premisas) a favor de otro que se pretende concluir o establecer (la conclusión). Recordá que hay ciertas expresiones que, cuando están, nos ayudan a distinguir las premisas de la conclusión. En el libro de la cátedra las denominamos “indicador de premisa” e “indicador de conclusión”. En este caso, \"lo cual justifica\" es un indicador de conclusión."
      },
      {
        "id": "Ejercicio 2",
        "question": "Dado el siguiente argumento, indicá cuáles son sus premisas. Seleccioná dos opciones y escribí los números en la grilla de resolución. El rinoceronte gigante llegó a medir hasta 7 metros de altura. Por otro lado, llegó a pesar hasta 20 toneladas. De esto se sigue que sea considerado el mamífero más grande de la historia.",
        "options": [
          {
            "text": "El rinoceronte gigante llegó a pesar hasta 20 toneladas.",
            "is_correct": true
          },
          {
            "text": "Llegó a pesar hasta 20 toneladas.",
            "is_correct": false
          },
          {
            "text": "El rinoceronte gigante es considerado el mamífero más grande de la historia.",
            "is_correct": false
          },
          {
            "text": "El rinoceronte gigante llegó a medir hasta 7 metros de altura.",
            "is_correct": true
          }
        ],
        "explanation": "Para identificar la respuesta es importante recordar que hay ciertas expresiones que, cuando están, nos ayudan a identificar las premisas y la conclusión de un argumento. En el libro las llamamos indicadores de premisa y de conclusión, respectivamente. En el argumento dado hay un indicador de conclusión, a saber, \"de esto se sigue que\". Es importante recordar dos cosas: (i) tanto las premisas como la conclusión se deben enunciar de manera completa, y (ii) los indicadores nunca forman parte de las premisas o la conclusión."
      },
      {
        "id": "Ejercicio 3",
        "question": "Los argumentos están compuestos por enunciados. Estos enunciados pueden combinarse mediante expresiones lógicas dando lugar a enunciados complejos. Dados los siguientes enunciados verdaderos: - El tiburón megalodón habitaba aguas cálidas. - El tiburón megalodón cazaba cerca de las costas. Determiná cuál de los siguientes enunciados complejos es verdadero. Seleccioná una opción y escribí el número en la grilla de resolución.",
        "options": [
          {
            "text": "Si el tiburón megalodón cazaba cerca de las costas, habitaba aguas cálidas.",
            "is_correct": true
          },
          {
            "text": "El tiburón megalodón no cazaba cerca de las costas o no habitaba aguas cálidas.",
            "is_correct": false
          },
          {
            "text": "El tiburón megalodón no cazaba cerca de las costas y habitaba aguas cálidas.",
            "is_correct": false
          },
          {
            "text": "El tiburón megalodón no cazaba cerca de las costas.",
            "is_correct": false
          }
        ],
        "explanation": "En este ejercicio tuviste que evaluar el valor veritativo de una conjunción, una negación, una disyunción y un condicional: 1.        Las conjunciones pueden expresarse con “y”, “,”, “además”, “pero”. Las negaciones con “no”, “ no es cierto que”. Los condicionales con “si… entonces” y las disyunciones con “o”, “ o bien … o bien”. 2.        Las conjunciones son verdaderas sólo en el caso en que ambos conyuntos sean verdaderos, esto es, basta que uno de los enunciados combinados por la conjunción sea falso, para que el enunciado complejo resulte falso. 3.        Cuando un enunciado es verdadero, su negación es falsa y, a la inversa, cuando un enunciado es falso, su negación resultará verdadera. 4.        Los enunciados condicionales son falsos únicamente cuando el antecedente es verdadero y el consecuente falso, en el resto de los casos son verdaderos. 5.         Hay dos tipos de disyunciones, las inclusivas y las exclusivas. Expresiones como “o bien… o bien” sugieren que se trata de una disyunción exclusiva, en cambio la mera presencia de una “o” nos conduce a pensar que es inclusiva. Cuando ambas partes son falsas, la disyunción entre ambas es falsa, no importa el tipo de disyunción del cual se trate. Por el contrario, cuando uno de los disyuntos es verdadero y el otro falso, la disyunción es verdadera. El caso en que ambos tipos de disyunciones arrojan valores diferentes es aquel en que ambos disyuntos son verdaderos. Si la disyunción es inclusiva, el enunciado complejo será verdadero; si es exclusiva, será falso. En este ejercicio el enunciado complejo verdadero es el condicional, dado que tiene antecedente y consecuente verdaderos."
      },
      {
        "id": "Ejercicio 4",
        "question": "Al estudiar los enunciados, los distinguimos por su alcance. Dados los siguientes cuatro enunciados determiná cuál de ellos es un enunciado singular. Seleccioná una opción y escribí el número en la grilla de resolución.",
        "options": [
          {
            "text": "Algunos tuátaras llegan a la madurez sexual después de los 15 años de edad.",
            "is_correct": false
          },
          {
            "text": "El 70% de los tuátaras vive más de 80 años.",
            "is_correct": false
          },
          {
            "text": "Todos los tuátaras tienen un muy buen sentido del olfato.",
            "is_correct": false
          },
          {
            "text": "Henry, el tuátara, tuvo más de 45 crías.",
            "is_correct": true
          }
        ],
        "explanation": "En este ejercicio se te pide que reconozcas un enunciado singular. Un enunciado singular afirma algo acerca de un individuo en particular. Así, la respuesta aquí es \"Henry. el tuátara, tuvo más de 45 crías\"."
      },
      {
        "id": "Ejercicio 5",
        "question": "Los enunciados se clasifican según su alcance y ello determina sus condiciones de verdad. Dado el siguiente enunciado determiná en qué situación resultaría verdadero. Seleccioná una opción y escribí el número en la grilla de resolución. Algunos ictiosaurios tienen una aleta dorsal.",
        "options": [
          {
            "text": "Si encontramos un animal que es un plesiosaurio y tiene una aleta dorsal.",
            "is_correct": false
          },
          {
            "text": "Si encontramos un animal que es un ictiosaurio y tiene una aleta dorsal.",
            "is_correct": true
          },
          {
            "text": "Si encontramos un animal que es un tiranosaurio y no tiene una aleta dorsal.",
            "is_correct": false
          },
          {
            "text": "Si encontramos un animal que es un ictiosaurio y carece de aleta dorsal.",
            "is_correct": false
          }
        ],
        "explanation": "El enunciado propuesto es un enunciado existencial. Para que un enunciado existencial sea verdadero, basta con encontrar un caso de un miembro del conjunto al que se refiere que posea la propiedad asignada. En este caso, la existencia de un animal que sea un ictiosaurio y tenga una aleta dorsal basta para afirmar que el enunciado es verdadero."
      },
      {
        "id": "Ejercicio 6",
        "question": "Otro modo de clasificar los enunciados es agruparlos en tautologías, contradicciones o contingencias. Identificá cuál de los siguientes enunciados es una tautología. Seleccioná una opción y escribí el número en la grilla de resolución.",
        "options": [
          {
            "text": "El dodo se extinguió hace cientos de años.",
            "is_correct": false
          },
          {
            "text": "El dodo era un ave terrestre y con alas muy cortas.",
            "is_correct": false
          },
          {
            "text": "El dodo era un ave terrestre y no era un ave terrestre.",
            "is_correct": false
          },
          {
            "text": "El dodo era un ave terrestre o no era un ave terrestre.",
            "is_correct": true
          }
        ],
        "explanation": "En este ejercicio se pide que reconozcas una tautología. Para ello es importante tener en cuenta que: - Las tautologías son aquellos enunciados que son necesariamente verdaderos, no son meras verdades, sino que por la forma de la oración, sea como sea el mundo, será verdadera. - Las contradicciones son necesariamente falsas. -A diferencia de las tautologías y las contradicciones, las contingencias son enunciados que tal vez sean verdaderos o tal vez falsos, pero no son necesariamente ninguna de las dos cosas. Aun enunciados que nos parecen obviamente verdaderos serán contingentes si su verdad depende de cuestiones empíricas y no de la estructura misma de la oración. En este ejercicio tenemos una disyunción que necesariamente será verdadera debido a que siempre tendrá al menos un disyunto verdadero. En efecto, si el dodo era un ave terrestre, el disyunto de la izquierda es verdadero; y si el dodo no era un ave terrestre, el disyunto de la derecha será verdadero. Así, independientemente de cómo era de hecho el dodo, el enunciado en cuestión será necesariamente verdadero."
      },
      {
        "id": "Ejercicio 7",
        "question": "Al caracterizar los argumentos deductivos introdujimos la noción de validez. Dados los siguientes enunciados, determiná qué conclusión se infiere de modo válido. Los tigres dientes de sable usan sus colmillos para triturar o para asfixiar. Pero los tigres dientes de sable no usan sus colmillos para triturar. Seleccioná una opción y escribí el número en la grilla de resolución.",
        "options": [
          {
            "text": "Los tigres dientes de sable no usan sus colmillos para asfixiar.",
            "is_correct": false
          },
          {
            "text": "Los tigres dientes de sable usan sus colmillos para triturar.",
            "is_correct": false
          },
          {
            "text": "Los tigres dientes de sable usan sus colmillos para asfixiar.",
            "is_correct": true
          },
          {
            "text": "Si los tigres dientes de sable no usan sus colmillos para triturar, los usan para apuñalar.",
            "is_correct": false
          }
        ],
        "explanation": "En este ejercicio se te pide que elijas qué enunciado de la lista puede funcionar como la conclusión de un argumento válido dada las premisas propuestas. Los argumentos válidos se pueden reconocer de modos diferentes. Por un lado, porque si suponemos  que las premisas son todas verdaderas, entonces necesariamente hemos de admitir que la conclusión es verdadera también. Por otro lado, podemos atender a su estructura: si reconocemos alguna estructura de las presentadas oportunamente en el material de lectura, tales como el Modus Ponens , Modus Tollens , Silogismo disyuntivo, Instanciación del universal, etc., sabemos que estamos frente a una forma válida. En este caso, la opción 3 es el único enunciado que se puede inferir en forma válida, ya que es un caso de Silogismo disyuntivo. Recordá lo siguiente: lo que hace que un argumento sea válido o inválido no es que sus premisas y conclusión sean de hecho  verdaderas o falsas; lo que lo hace válido o inválido es su forma ."
      },
      {
        "id": "Ejercicio 8",
        "question": "Determiná cuál de los siguientes argumentos es inválido. Seleccioná una opción y escribí el número en la grilla de resolución.",
        "options": [
          {
            "text": "El rinoceronte lanudo come carne o come pasto. En consecuencia, come pasto.",
            "is_correct": true
          },
          {
            "text": "Si el rinoceronte lanudo come carne, entonces digiere huesos. Pero el rinoceronte lanudo no digiere huesos. Luego, no come carne.",
            "is_correct": false
          },
          {
            "text": "Si el megalodón es pariente cercano del tiburón blanco, entonces es un depredador marino. Y es pariente cercano del tiburón blanco. Se sigue que el megalodón es un depredador marino.",
            "is_correct": false
          },
          {
            "text": "El león de las cavernas vive en cavernas o sus restos se encuentran en cavernas. Puesto que no es cierto que vive en cavernas, queda demostrado que los restos del león de las cavernas se encuentran en cavernas.",
            "is_correct": false
          }
        ],
        "explanation": "En este ejercicio se te pide que reconozcas un argumento inválido. Los argumentos inválidos se pueden reconocer de modos diferentes. Por un lado, porque resulta concebible que las premisas sean verdaderas y la conclusión no. Por otro lado, si atendemos a su estructura , y reconocemos un argumento inductivo o una falacia, sabremos que estamos frente a una forma inválida. En este caso el único argumento inválido es de la forma A o B. En consecuencia, B . Recordá lo siguiente: lo que hace que un argumento sea válido o inválido no es que sus premisas y conclusión sean de hecho verdaderas o falsas; lo que lo hace válido o inválido es su forma . En particular, un argumento inválido puede tener premisas verdaderas y una conclusión verdadera."
      },
      {
        "id": "Ejercicio 9",
        "question": "Al presentar los argumentos inductivos distinguimos tres tipos: por enumeración incompleta, por analogía y silogismos inductivos. Dado el siguiente conjunto de enunciados: El mamut era un mamífero prehistórico y tenía colmillos largos. El mastodonte era un mamífero prehistórico y tenía colmillos largos. .................................................................................................. .................................................................................................... Seleccioná cuáles de los siguientes enunciados corresponden respectivamente a la premisa faltante y a la conclusión, de modo tal que resulte un argumento inductivo por analogía. Escribí en la grilla de resolución la opción seleccionada como premisa donde dice \"P\" y la opción seleccionada como conclusión donde dice \"C\".",
        "options": [
          {
            "text": "Todos los mamíferos prehistóricos tenían colmillos largos.",
            "is_correct": false
          },
          {
            "text": "La mayoría de los mamíferos prehistóricos tenían colmillos largos.",
            "is_correct": false
          },
          {
            "text": "El rinoceronte lanudo tenía colmillos largos.",
            "is_correct": true
          },
          {
            "text": "El rinoceronte lanudo era un mamífero prehistórico.",
            "is_correct": true
          },
          {
            "text": "El mamut era un mamífero prehistórico.",
            "is_correct": false
          }
        ],
        "explanation": "Los argumentos inductivos por analogía son aquellos en que comparamos varios casos y constatamos que los mismos se asemejan en una o más propiedades, para inferir, a partir de ahí, que uno de esos casos tiene además otra propiedad que los otros comparten. En este caso, partimos de comparar tres animales (el mamut, el mastodonte y el rinoceronte lanudo) y constatar que se asemejan en ciertos aspectos, para concluir que uno de esos animales (el rinoceronte lanudo) también se asemeja en un nuevo aspecto que los otros dos (el mamut y el mastodonte) comparten. Hay dos soluciones posibles para este ejercicio. Una solución es tomar \"el rinoceronte lanudo era un mamífero prehistórico\" como premisa y \"el rinoceronte lanudo tenía colmillos largos\" como conclusión. La otra solución es, a la inversa, tomar \"el rinoceronte lanudo era un mamífero prehistórico\" como conclusión y \"el rinoceronte lanudo tenía colmillos largos\" como premisa."
      },
      {
        "id": "Ejercicio 10",
        "question": "Tras clasificar los distintos tipos de argumentos inductivos establecimos criterios específicos para su evaluación. Atendiendo a esto, determiná qué premisa sirve para fortalecer el siguiente argumento inductivo sin que deje de ser un argumento inductivo por enumeración incompleta. Seleccioná una opción y escribí el número en la grilla de resolución. El tiranosaurio y el estegosaurio, al igual que el braquiosaurio, vivían en manada. Por ende, es probable que todos los animales carnívoros vivieran en manadas, dado que el tiranosaurio, el estegosaurio y el braquiosaurio eran animales carnívoros.",
        "options": [
          {
            "text": "El gigantosaurio vivía en manada.",
            "is_correct": false
          },
          {
            "text": "El velociraptor, que era un animal carnívoro, vivía en manada.",
            "is_correct": true
          },
          {
            "text": "El megaterio no era un animal carnívoro.",
            "is_correct": false
          },
          {
            "text": "El tiranosaurio, el estegosaurio y el braquiosaurio eran las únicas tres especies de anímales carnívoros.",
            "is_correct": false
          }
        ],
        "explanation": "Un argumento inductivo por enumeración incompleta parte de la presencia de una propiedad en una muestra y concluye la presencia de esa propiedad en todo el conjunto al cual los casos de esa muestra pertenecen. El argumento inductivo más fuerte será aquel en el cual la muestra a partir de la cual se generaliza en la conclusión sea mayor. Ten en cuenta que, para que el argumento siga siendo inductivo, la muestra no puede ser igual al conjunto sobre el que se realiza la generalización."
      }
    ]
  },
  {
    "id": "tema_9",
    "title": "1º Parcial - Tema 9",
    "questions": [
      {
        "id": "Ejercicio 1",
        "question": "A. Comenzamos la Unidad 1 caracterizando los argumentos. Atendiendo a esto, determiná si el siguiente fragmento es un argumento. Escribí \"SI\" o \"NO\" donde dice \"A\" en la grilla de resolución. Los mamuts rondaron la Tierra en el período Cenozoico, luego de los dinosaurios que lo hicieron en el período Mesozoico. B. Seleccioná la opción que justifica tu respuesta y escribí el número donde dice \"B\" en la grilla de resolución.",
        "options": [
          {
            "text": "porque es verdadero.",
            "is_correct": false
          },
          {
            "text": "porque no hay premisas que fundamenten la conclusión.",
            "is_correct": true
          },
          {
            "text": "porque es un enunciado.",
            "is_correct": false
          },
          {
            "text": "porque da información suficiente para inferir la conclusión.",
            "is_correct": false
          }
        ],
        "explanation": "En este ejercicio se pide que determines si el fragmento es un argumento. Para ello es importante tener presente que en todo argumento hay enunciados que se ofrecen como razones (las premisas) a favor de otro que se pretende concluir o establecer (la conclusión). Recordá que hay ciertas expresiones que, cuando están, nos ayudan a distinguir las premisas de la conclusión. En el libro de la cátedra las denominamos “indicador de premisa” e “indicador de conclusión”.  En este caso, no hay conclusión alguna ni premisas que funcionen como razones. Aclaración: aceptamos como correcta también la opción número 3. Si bien es cierto que un argumento puede ser formulado en una sola oración, esa oración debe tener una estructura tal en donde podamos reconocer enunciado(s) que funcionan como premisa(s) y otro que funciona como conclusión.  La oración que debías analizar en este ejercicio no tenía tal tipo de estructura, de modo que no podía identificarse premisas y conclusión. Esto podía inducir a confusiones, por ello les concedemos también la respuesta 3 como correcta."
      },
      {
        "id": "Ejercicio 2",
        "question": "Dado el siguiente argumento, indicá cuáles son sus premisas. Seleccioná dos opciones y escribí los números en la grilla de resolución. La falta de presas grandes hizo que el tigre dientes de sable dejara de poder alimentarse. Además, tampoco estaba adaptado para sobrevivir a base de una dieta no carnívora. De lo cual se infiere su extinción.",
        "options": [
          {
            "text": "El tigre dientes de sable está extinto.",
            "is_correct": false
          },
          {
            "text": "Tampoco estaba adaptado para sobrevivir a base de una dieta no carnívora.",
            "is_correct": false
          },
          {
            "text": "El tigre dientes de sable no estaba adaptado para sobrevivir a base de una dieta no carnívora.",
            "is_correct": true
          },
          {
            "text": "La falta de presas grandes hizo que el tigre dientes de sable dejara de poder alimentarse.",
            "is_correct": true
          }
        ],
        "explanation": "Para identificar la respuesta es importante recordar que hay ciertas expresiones que, cuando están, nos ayudan a identificar las premisas y la conclusión de un argumento. En el libro las llamamos indicadores de premisa y de conclusión, respectivamente. En el argumento dado hay un indicador de conclusión, a saber, \"de lo cual se infiere\". Es importante recordar dos cosas: (i) tanto las premisas como la conclusión se deben enunciar de manera completa, y (ii) los indicadores nunca forman parte de las premisas o la conclusión."
      },
      {
        "id": "Ejercicio 3",
        "question": "Los argumentos están compuestos por enunciados. Estos enunciados pueden combinarse mediante expresiones lógicas dando lugar a enunciados complejos. Dados los siguientes enunciados verdaderos: - El tiburón megalodón se alimentaba de ballenas. - El tiburón megalodón habitaba las aguas de los trópicos. Determiná cuál de los siguientes enunciados complejos es falso. Seleccioná una opción y escribí el número en la grilla de resolución.",
        "options": [
          {
            "text": "El tiburón megalodón se alimentaba de ballenas y no habitaba las aguas de los trópicos.",
            "is_correct": true
          },
          {
            "text": "El tiburón megalodón se alimentaba de ballenas.",
            "is_correct": false
          },
          {
            "text": "Si el tiburón megalodón se alimentaba de ballenas, entonces habitaba las aguas de los trópicos.",
            "is_correct": false
          },
          {
            "text": "El tiburón megalodón se alimentaba de ballenas o habitaba las aguas de los trópicos.",
            "is_correct": false
          }
        ],
        "explanation": "En este ejercicio tuviste que evaluar el valor veritativo de una conjunción, una negación, una disyunción y un condicional: 1.        Las conjunciones pueden expresarse con “y”, “,”, “además”, “pero”. Las negaciones con “no”, “ no es cierto que”. Los condicionales con “si… entonces” y las disyunciones con “o”, “ o bien … o bien”. 2.        Las conjunciones son verdaderas sólo en el caso en que ambos conyuntos sean verdaderos, esto es, basta que uno de los enunciados combinados por la conjunción sea falso, para que el enunciado complejo resulte falso. 3.        Cuando un enunciado es verdadero, su negación es falsa y, a la inversa, cuando un enunciado es falso, su negación resultará verdadera. 4.        Los enunciados condicionales son falsos únicamente cuando el antecedente es verdadero y el consecuente falso, en el resto de los casos son verdaderos. 5.         Hay dos tipos de disyunciones, las inclusivas y las exclusivas. Expresiones como “o bien… o bien” sugieren que se trata de una disyunción exclusiva, en cambio la mera presencia de una “o” nos conduce a pensar que es inclusiva. Cuando ambas partes son falsas, la disyunción entre ambas es falsa, no importa el tipo de disyunción del cual se trate. Por el contrario, cuando uno de los disyuntos es verdadero y el otro falso, la disyunción es verdadera. El caso en que ambos tipos de disyunciones arrojan valores diferentes es aquel en que ambos disyuntos son verdaderos. Si la disyunción es inclusiva, el enunciado complejo será verdadero; si es exclusiva, será falso. En este ejercicio el enunciado complejo falso es la conjunción, dado que tiene un conyunto falso."
      },
      {
        "id": "Ejercicio 4",
        "question": "Al estudiar los enunciados, los distinguimos por su alcance. Dados los siguientes cuatro enunciados determiná cuál de ellos es un enunciado universal. Seleccioná una opción y escribí el número en la grilla de resolución.",
        "options": [
          {
            "text": "El resto fósil más antiguo de león de las cavernas fue encontrado en Alaska.",
            "is_correct": false
          },
          {
            "text": "Todos los leones de las cavernas son carnívoros.",
            "is_correct": true
          },
          {
            "text": "Algunos leones de las cavernas cazan en manada.",
            "is_correct": false
          },
          {
            "text": "El 70% de los leones de las cavernas machos tienen melena.",
            "is_correct": false
          }
        ],
        "explanation": "En este ejercicio se te pide que reconozcas un tipo de enunciado, en este caso, un enunciado universal. Los enunciados universales son aquellos que afirman algo respecto de todos los miembros de un conjunto. Así, la respuesta es \"Todos los leones de las cavernas son carnívoros\"."
      },
      {
        "id": "Ejercicio 5",
        "question": "Los enunciados se clasifican según su alcance y ello determina sus condiciones de verdad. Dado el siguiente enunciado determiná en qué situación resultaría falso. Seleccioná una opción y escribí el número en la grilla de resolución. Todos los titanosaurios ponen huevos.",
        "options": [
          {
            "text": "Si encontramos un animal que es un ictiosaurio y no pone huevos.",
            "is_correct": false
          },
          {
            "text": "Si encontramos un animal que es un titanosaurio y pone huevos.",
            "is_correct": false
          },
          {
            "text": "Si encontramos un animal que es un ictiosaurio y pone huevos.",
            "is_correct": false
          },
          {
            "text": "Si encontramos un animal que es un titanosaurio y no pone huevos.",
            "is_correct": true
          }
        ],
        "explanation": "El enunciado propuesto es un enunciado universal. Para que un enunciado universal sea falso, basta con que encontremos un caso de un miembro del conjunto al que se refiere el enunciado que no posea la propiedad asignada. Entre las opciones de este ejercicio, el único caso incompatible con el enunciado es aquel en el que un animal es un titanosaurio y no pone huevos."
      },
      {
        "id": "Ejercicio 6",
        "question": "Otro modo de clasificar los enunciados es agruparlos en tautologías, contradicciones o contingencias. Identificá cuál de los siguientes enunciados es una contradicción. Seleccioná una opción y escribí el número en la grilla de resolución.",
        "options": [
          {
            "text": "Los dinosaurios se extinguieron en el Cretácico y no se extinguieron en el Cretácico.",
            "is_correct": true
          },
          {
            "text": "Los dinosaurios se extinguieron en el Cretácico.",
            "is_correct": false
          },
          {
            "text": "Los dinosaurios se extinguieron en el Cretácico o no se extinguieron en el Cretácico.",
            "is_correct": false
          },
          {
            "text": "Si los dinosaurios se extinguieron en el Cretácico, entonces se extinguieron en el Cretácico.",
            "is_correct": false
          }
        ],
        "explanation": "En este ejercicio se pide que reconozcas una contradicción. Para ello es importante tener en cuenta que: - Las tautologías son aquellos enunciados que son necesariamente verdaderos, no son meras verdades, sino que por la forma de la oración, sea como sea el mundo, será verdadera. - Las contradicciones son necesariamente falsas. -A diferencia de las tautologías y las contradicciones, las contingencias son enunciados que tal vez sean verdaderos o tal vez falsos, pero no son necesariamente ninguna de las dos cosas. Aun enunciados que nos parecen obviamente verdaderos serán contingentes si su verdad depende de cuestiones empíricas y no de la estructura misma de la oración. En este ejercicio tenemos una conjunción que resultará necesariamente falsa dado que siempre sucederá que si uno de sus conyuntos es verdadero, el otro resultará falso. Y una conjunción con un conyunto verdadero y otro falso será falsa."
      },
      {
        "id": "Ejercicio 7",
        "question": "Al caracterizar los argumentos deductivos introdujimos la noción de validez. Dados los siguientes enunciados, determiná qué conclusión se infiere de modo válido. Si el tiburón megalodón se cría en zonas cálidas, entonces el enfriamiento oceánico causa su extinción. En efecto, el tiburón megalodón se cría en zonas cálidas. Seleccioná una opción y escribí el número en la grilla de resolución.",
        "options": [
          {
            "text": "El tiburón megalodón se ve forzado a migrar a zonas cálidas.",
            "is_correct": false
          },
          {
            "text": "El tiburón megalodón está extinto en la actualidad.",
            "is_correct": false
          },
          {
            "text": "El enfriamiento oceánico causa la extinción del tiburón megalodón.",
            "is_correct": true
          },
          {
            "text": "El enfriamiento oceánico no causa la extinción del tiburón megalodón si migra.",
            "is_correct": false
          }
        ],
        "explanation": "En este ejercicio se te pide que elijas qué enunciado de la lista puede funcionar como la conclusión de un argumento válido dada las premisas propuestas. Los argumentos válidos se pueden reconocer de modos diferentes. Por un lado, porque si suponemos  que las premisas son todas verdaderas, entonces necesariamente hemos de admitir que la conclusión es verdadera también. Por otro lado, podemos atender a su estructura: si reconocemos alguna estructura de las presentadas oportunamente en el material de lectura, tales como el Modus Ponens , Modus Tollens , Silogismo disyuntivo, Instanciación del universal, etc., sabemos que estamos frente a una forma válida. En este caso, la opción 3 es el único enunciado que se puede inferir en forma válida, ya que es un caso de Modus ponens . Recordá lo siguiente: lo que hace que un argumento sea válido o inválido no es que sus premisas y conclusión sean de hecho  verdaderas o falsas; lo que lo hace válido o inválido es su forma ."
      },
      {
        "id": "Ejercicio 8",
        "question": "Determiná cuál de los siguientes argumentos es inválido. Seleccioná una opción y escribí el número en la grilla de resolución.",
        "options": [
          {
            "text": "Si el mamut es un elefántido, entonces posee una trompa altamente desarrollada. En efecto, es un elefántido. Luego, el mamut posee una trompa altamente desarrollada.",
            "is_correct": false
          },
          {
            "text": "Los mamuts tienen trompa. Además, ponen huevos. En consecuencia, los mamuts tienen trompa y ponen huevos.",
            "is_correct": false
          },
          {
            "text": "Si el rinoceronte lanudo posee pelo, entonces resiste el frío extremo de la era glacial. Pero el rinoceronte lanudo no resiste el frío extremo de la era glacial. Por lo tanto, no posee pelo.",
            "is_correct": false
          },
          {
            "text": "Si el tigre dientes de sable camina apoyando los dedos de sus patas, entonces camina sin apoyar el talón. Como el tigre dientes de sable camina sin apoyar el talón, se sigue que camina apoyando los dedos de sus patas.",
            "is_correct": true
          }
        ],
        "explanation": "En este ejercicio se te pide que reconozcas un argumento inválido. Los argumentos inválidos se pueden reconocer de modos diferentes. Por un lado, porque resulta concebible que las premisas sean verdaderas y la conclusión no. Por otro lado, si atendemos a su estructura , y reconocemos un argumento inductivo o una falacia, sabremos que estamos frente a una forma inválida. En este caso el único argumento inválido es una falacia de afirmación del consecuente. Recordá lo siguiente: lo que hace que un argumento sea válido o inválido no es que sus premisas y conclusión sean de hecho verdaderas o falsas; lo que lo hace válido o inválido es su forma . En particular, un argumento inválido puede tener premisas verdaderas y una conclusión verdadera."
      },
      {
        "id": "Ejercicio 9",
        "question": "Al presentar los argumentos inductivos distinguimos tres tipos: por enumeración incompleta, por analogía y silogismos inductivos. Dado el siguiente conjunto de enunciados: El rinoceronte lanudo era un mamífero prehistórico y tenía pelo largo. El megaterio era un mamífero prehistórico y tenía pelo largo. .......................................................................................................................... ............................................................................................................................. Seleccioná cuáles de los siguientes enunciados corresponden respectivamente a la premisa faltante y a la conclusión, de modo tal que resulte un argumento inductivo por enumeración incompleta. Escribí en la grilla de resolución la opción seleccionada como premisa donde dice \"P\" y la opción seleccionada como conclusión donde dice \"C\".",
        "options": [
          {
            "text": "Ningún mamífero prehistórico tenía pelo largo.",
            "is_correct": false
          },
          {
            "text": "El mamut era un mamífero prehistórico y tenía pelo largo.",
            "is_correct": true
          },
          {
            "text": "El mamut era un mamífero prehistórico.",
            "is_correct": false
          },
          {
            "text": "El mastodonte tenía colmillos largos.",
            "is_correct": false
          },
          {
            "text": "Todos los mamíferos prehistóricos tenían pelo largo.",
            "is_correct": true
          }
        ],
        "explanation": "En los argumentos inductivos por enumeración incompleta, las premisas enumeran una serie de casos en los que se verifica un determinado fenómeno (que ciertos mamíferos prehistóricos tenían pelo largo). Y, sobre la base de los casos enumerados, se generaliza la aplicación de la propiedad (en este caso, la de tener pelo largo) hacia todos los casos de ese tipo, i.e., hacia todos los mamíferos prehistóricos."
      },
      {
        "id": "Ejercicio 10",
        "question": "Tras clasificar los distintos tipos de argumentos inductivos establecimos criterios específicos para su evaluación. Atendiendo a esto, determiná qué premisa sirve para fortalecer el siguiente argumento inductivo sin que deje de ser un argumento inductivo por analogía. Seleccioná una opción y escribí el número en la grilla de resolución. El mamut, el mastodonte y el rinoceronte lanudo eran mamíferos prehistóricos que tenían colmillos largos, de lo cual podemos inferir que seguramente el megaterio, que también era un mamífero prehistórico, tenía colmillos largos.",
        "options": [
          {
            "text": "El tigre dientes de sable era un mamífero prehistórico que tenía colmillos largos.",
            "is_correct": true
          },
          {
            "text": "El 70% de los mamíferos prehistóricos tenían colmillos largos.",
            "is_correct": false
          },
          {
            "text": "Todos los mamíferos prehistóricos tenían colmillos largos.",
            "is_correct": false
          },
          {
            "text": "Algunos mamíferos prehistóricos no tenían colmillos largos.",
            "is_correct": false
          }
        ],
        "explanation": "En un argumento inductivo por analogía, concluimos que un objeto o clase tiene una propiedad por su semejanza con otros objetos o clases que sabemos que tienen esa propiedad. En este caso, el argumento inductivo por analogía más fuerte es aquel en el cual es mayor la cantidad de objetos o clases semejantes que sabemos que tienen la misma propiedad."
      }
    ]
  },
  {
    "id": "tema_10",
    "title": "1º Parcial - Tema 10",
    "questions": [
      {
        "id": "Ejercicio 1",
        "question": "A. Comenzamos la Unidad 1 caracterizando los argumentos. Atendiendo a esto, determiná si el siguiente fragmento es un argumento. Escribí \"SI\" o \"NO\" donde dice \"A\" en la grilla de resolución. Los mamuts rondaron la Tierra en el período Cenozoico, luego de los dinosaurios que lo hicieron en el período Mesozoico. B. Seleccioná la opción que justifica tu respuesta y escribí el número donde dice \"B\" en la grilla de resolución.",
        "options": [
          {
            "text": "porque no hay premisas que fundamenten la conclusión.",
            "is_correct": true
          },
          {
            "text": "porque es verdadero.",
            "is_correct": false
          },
          {
            "text": "porque es un enunciado.",
            "is_correct": false
          },
          {
            "text": "porque da información suficiente para inferir la conclusión.",
            "is_correct": false
          }
        ],
        "explanation": "En este ejercicio se pide que determines si el fragmento es un argumento. Para ello es importante tener presente que en todo argumento hay enunciados que se ofrecen como razones (las premisas) a favor de otro que se pretende concluir o establecer (la conclusión). Recordá que hay ciertas expresiones que, cuando están, nos ayudan a distinguir las premisas de la conclusión. En el libro de la cátedra las denominamos “indicador de premisa” e “indicador de conclusión”.  En este caso, no hay conclusión alguna ni premisas que funcionen como razones. Aclaración: aceptamos como correcta también la opción número 3. Si bien es cierto que un argumento puede ser formulado en una sola oración, esa oración debe tener una estructura tal en donde podamos reconocer enunciado(s) que funcionan como premisa(s) y otro que funciona como conclusión.  La oración que debías analizar en este ejercicio no tenía tal tipo de estructura, de modo que no podía identificarse premisas y conclusión. Esto podía inducir a confusiones, por ello les concedemos también la respuesta 3 como correcta."
      },
      {
        "id": "Ejercicio 2",
        "question": "Dado el siguiente argumento, indicá cuáles son sus premisas. Seleccioná dos opciones y escribí los números en la grilla de resolución. La falta de presas grandes hizo que el tigre dientes de sable dejara de poder alimentarse. Además, tampoco estaba adaptado para sobrevivir a base de una dieta no carnívora. De lo cual se infiere su extinción.",
        "options": [
          {
            "text": "El tigre dientes de sable está extinto.",
            "is_correct": false
          },
          {
            "text": "El tigre dientes de sable no estaba adaptado para sobrevivir a base de una dieta no carnívora.",
            "is_correct": true
          },
          {
            "text": "Tampoco estaba adaptado para sobrevivir a base de una dieta no carnívora.",
            "is_correct": false
          },
          {
            "text": "La falta de presas grandes hizo que el tigre dientes de sable dejara de poder alimentarse.",
            "is_correct": true
          }
        ],
        "explanation": "Para identificar la respuesta es importante recordar que hay ciertas expresiones que, cuando están, nos ayudan a identificar las premisas y la conclusión de un argumento. En el libro las llamamos indicadores de premisa y de conclusión, respectivamente. En el argumento dado hay un indicador de conclusión, a saber, \"de lo cual se infiere\". Es importante recordar dos cosas: (i) tanto las premisas como la conclusión se deben enunciar de manera completa, y (ii) los indicadores nunca forman parte de las premisas o la conclusión."
      },
      {
        "id": "Ejercicio 3",
        "question": "Los argumentos están compuestos por enunciados. Estos enunciados pueden combinarse mediante expresiones lógicas dando lugar a enunciados complejos. Dados los siguientes enunciados verdaderos: - El tiburón megalodón se alimentaba de ballenas. - El tiburón megalodón habitaba las aguas de los trópicos. Determiná cuál de los siguientes enunciados complejos es falso. Seleccioná una opción y escribí el número en la grilla de resolución.",
        "options": [
          {
            "text": "El tiburón megalodón se alimentaba de ballenas o habitaba las aguas de los trópicos.",
            "is_correct": false
          },
          {
            "text": "Si el tiburón megalodón se alimentaba de ballenas, entonces habitaba las aguas de los trópicos.",
            "is_correct": false
          },
          {
            "text": "El tiburón megalodón se alimentaba de ballenas y no habitaba las aguas de los trópicos.",
            "is_correct": true
          },
          {
            "text": "El tiburón megalodón se alimentaba de ballenas.",
            "is_correct": false
          }
        ],
        "explanation": "En este ejercicio tuviste que evaluar el valor veritativo de una conjunción, una negación, una disyunción y un condicional: 1.        Las conjunciones pueden expresarse con “y”, “,”, “además”, “pero”. Las negaciones con “no”, “ no es cierto que”. Los condicionales con “si… entonces” y las disyunciones con “o”, “ o bien … o bien”. 2.        Las conjunciones son verdaderas sólo en el caso en que ambos conyuntos sean verdaderos, esto es, basta que uno de los enunciados combinados por la conjunción sea falso, para que el enunciado complejo resulte falso. 3.        Cuando un enunciado es verdadero, su negación es falsa y, a la inversa, cuando un enunciado es falso, su negación resultará verdadera. 4.        Los enunciados condicionales son falsos únicamente cuando el antecedente es verdadero y el consecuente falso, en el resto de los casos son verdaderos. 5.         Hay dos tipos de disyunciones, las inclusivas y las exclusivas. Expresiones como “o bien… o bien” sugieren que se trata de una disyunción exclusiva, en cambio la mera presencia de una “o” nos conduce a pensar que es inclusiva. Cuando ambas partes son falsas, la disyunción entre ambas es falsa, no importa el tipo de disyunción del cual se trate. Por el contrario, cuando uno de los disyuntos es verdadero y el otro falso, la disyunción es verdadera. El caso en que ambos tipos de disyunciones arrojan valores diferentes es aquel en que ambos disyuntos son verdaderos. Si la disyunción es inclusiva, el enunciado complejo será verdadero; si es exclusiva, será falso. En este ejercicio el enunciado complejo falso es la conjunción, dado que tiene un conyunto verdadero y otro falso."
      },
      {
        "id": "Ejercicio 4",
        "question": "Al estudiar los enunciados, los distinguimos por su alcance. Dados los siguientes cuatro enunciados determiná cuál de ellos es un enunciado universal. Seleccioná una opción y escribí el número en la grilla de resolución.",
        "options": [
          {
            "text": "El 70% de los leones de las cavernas machos tienen melena.",
            "is_correct": false
          },
          {
            "text": "Algunos leones de las cavernas cazan en manada.",
            "is_correct": false
          },
          {
            "text": "Todos los leones de las cavernas son carnívoros.",
            "is_correct": true
          },
          {
            "text": "El resto fósil más antiguo de león de las cavernas fue encontrado en Alaska.",
            "is_correct": false
          }
        ],
        "explanation": "En este ejercicio se te pide que reconozcas un tipo de enunciado, en este caso, un enunciado universal. Los enunciados universales son aquellos que afirman algo respecto de todos los miembros de un conjunto. Así, la respuesta es \"Todos los leones de las cavernas son carnívoros\"."
      },
      {
        "id": "Ejercicio 5",
        "question": "Los enunciados se clasifican según su alcance y ello determina sus condiciones de verdad. Dado el siguiente enunciado determiná en qué situación resultaría falso. Seleccioná una opción y escribí el número en la grilla de resolución. Todos los titanosaurios ponen huevos.",
        "options": [
          {
            "text": "Si encontramos un animal que es un ictiosaurio y no pone huevos.",
            "is_correct": false
          },
          {
            "text": "Si encontramos un animal que es un titanosaurio y no pone huevos.",
            "is_correct": true
          },
          {
            "text": "Si encontramos un animal que es un ictiosaurio y pone huevos.",
            "is_correct": false
          },
          {
            "text": "Si encontramos un animal que es un titanosaurio y pone huevos.",
            "is_correct": false
          }
        ],
        "explanation": "El enunciado propuesto es un enunciado universal. Para que un enunciado universal sea falso, basta con que encontremos un caso de un miembro del conjunto al que se refiere el enunciado que no posea la propiedad asignada. Entre las opciones de este ejercicio, el único caso incompatible con el enunciado es aquel en el que un animal es un titanosaurio y no pone huevos."
      },
      {
        "id": "Ejercicio 6",
        "question": "Otro modo de clasificar los enunciados es agruparlos en tautologías, contradicciones o contingencias. Identificá cuál de los siguientes enunciados es una contradicción. Seleccioná una opción y escribí el número en la grilla de resolución.",
        "options": [
          {
            "text": "Los dinosaurios se extinguieron en el Cretácico o no se extinguieron en el Cretácico.",
            "is_correct": false
          },
          {
            "text": "Los dinosaurios se extinguieron en el Cretácico.",
            "is_correct": false
          },
          {
            "text": "Los dinosaurios se extinguieron en el Cretácico y no se extinguieron en el Cretácico.",
            "is_correct": true
          },
          {
            "text": "Si los dinosaurios se extinguieron en el Cretácico, entonces se extinguieron en el Cretácico.",
            "is_correct": false
          }
        ],
        "explanation": "En este ejercicio se pide que reconozcas una contradicción. Para ello es importante tener en cuenta que: - Las tautologías son aquellos enunciados que son necesariamente verdaderos, no son meras verdades, sino que por la forma de la oración, sea como sea el mundo, será verdadera. - Las contradicciones son necesariamente falsas. -A diferencia de las tautologías y las contradicciones, las contingencias son enunciados que tal vez sean verdaderos o tal vez falsos, pero no son necesariamente ninguna de las dos cosas. Aun enunciados que nos parecen obviamente verdaderos serán contingentes si su verdad depende de cuestiones empíricas y no de la estructura misma de la oración. En este ejercicio tenemos una conjunción que resultará necesariamente falsa dado que siempre sucederá que si uno de sus conyuntos es verdadero, el otro resultará falso. Y una conjunción con un conyunto verdadero y otro falso será falsa."
      },
      {
        "id": "Ejercicio 7",
        "question": "Al caracterizar los argumentos deductivos introdujimos la noción de validez. Dados los siguientes enunciados, determiná qué conclusión se infiere de modo válido. Si el tiburón megalodón se cría en zonas cálidas, entonces el enfriamiento oceánico causa su extinción. En efecto, el tiburón megalodón se cría en zonas cálidas. Seleccioná una opción y escribí el número en la grilla de resolución.",
        "options": [
          {
            "text": "El tiburón megalodón se ve forzado a migrar a zonas cálidas.",
            "is_correct": false
          },
          {
            "text": "El tiburón megalodón está extinto en la actualidad.",
            "is_correct": false
          },
          {
            "text": "El enfriamiento oceánico no causa la extinción del tiburón megalodón si migra.",
            "is_correct": false
          },
          {
            "text": "El enfriamiento oceánico causa la extinción del tiburón megalodón.",
            "is_correct": true
          }
        ],
        "explanation": "En este ejercicio se te pide que elijas qué enunciado de la lista puede funcionar como la conclusión de un argumento válido dada las premisas propuestas. Los argumentos válidos se pueden reconocer de modos diferentes. Por un lado, porque si suponemos  que las premisas son todas verdaderas, entonces necesariamente hemos de admitir que la conclusión es verdadera también. Por otro lado, podemos atender a su estructura: si reconocemos alguna estructura de las presentadas oportunamente en el material de lectura, tales como el Modus Ponens , Modus Tollens , Silogismo disyuntivo, Instanciación del universal, etc., sabemos que estamos frente a una forma válida. En este caso, la opción 4 es el único enunciado que se puede inferir en forma válida, ya que es un caso de Modus ponens . Recordá lo siguiente: lo que hace que un argumento sea válido o inválido no es que sus premisas y conclusión sean de hecho  verdaderas o falsas; lo que lo hace válido o inválido es su forma ."
      },
      {
        "id": "Ejercicio 8",
        "question": "Determiná cuál de los siguientes argumentos es inválido. Seleccioná una opción y escribí el número en la grilla de resolución.",
        "options": [
          {
            "text": "Si el tigre dientes de sable camina apoyando los dedos de sus patas, entonces camina sin apoyar el talón. Como el tigre dientes de sable camina sin apoyar el talón, se sigue que camina apoyando los dedos de sus patas.",
            "is_correct": true
          },
          {
            "text": "Los mamuts tienen trompa. Además, ponen huevos. En consecuencia, los mamuts tienen trompa y ponen huevos.",
            "is_correct": false
          },
          {
            "text": "Si el rinoceronte lanudo posee pelo, entonces resiste el frío extremo de la era glacial. Pero el rinoceronte lanudo no resiste el frío extremo de la era glacial. Por lo tanto, no posee pelo.",
            "is_correct": false
          },
          {
            "text": "Si el mamut es un elefántido, entonces posee una trompa altamente desarrollada. En efecto, es un elefántido. Luego, el mamut posee una trompa altamente desarrollada.",
            "is_correct": false
          }
        ],
        "explanation": "En este ejercicio se te pide que reconozcas un argumento inválido. Los argumentos inválidos se pueden reconocer de modos diferentes. Por un lado, porque resulta concebible que las premisas sean verdaderas y la conclusión no. Por otro lado, si atendemos a su estructura , y reconocemos un argumento inductivo o una falacia, sabremos que estamos frente a una forma inválida. En este caso el único argumento inválido es una falacia de afirmación del consecuente. Recordá lo siguiente: lo que hace que un argumento sea válido o inválido no es que sus premisas y conclusión sean de hecho verdaderas o falsas; lo que lo hace válido o inválido es su forma . En particular, un argumento inválido puede tener premisas verdaderas y una conclusión verdadera."
      },
      {
        "id": "Ejercicio 9",
        "question": "Al presentar los argumentos inductivos distinguimos tres tipos: por enumeración incompleta, por analogía y silogismos inductivos. Dado el siguiente conjunto de enunciados: El rinoceronte lanudo era un mamífero prehistórico y tenía pelo largo. El megaterio era un mamífero prehistórico y tenía pelo largo. .......................................................................................................................... ............................................................................................................................. Seleccioná cuáles de los siguientes enunciados corresponden respectivamente a la premisa faltante y a la conclusión, de modo tal que resulte un argumento inductivo por enumeración incompleta. Escribí en la grilla de resolución la opción seleccionada como premisa donde dice \"P\" y la opción seleccionada como conclusión donde dice \"C\".",
        "options": [
          {
            "text": "Ningún mamífero prehistórico tenía pelo largo.",
            "is_correct": false
          },
          {
            "text": "El mamut era un mamífero prehistórico.",
            "is_correct": false
          },
          {
            "text": "El mamut era un mamífero prehistórico y tenía pelo largo.",
            "is_correct": true
          },
          {
            "text": "Todos los mamíferos prehistóricos tenían pelo largo.",
            "is_correct": true
          },
          {
            "text": "El mastodonte tenía colmillos largos.",
            "is_correct": false
          }
        ],
        "explanation": "En los argumentos inductivos por enumeración incompleta, las premisas enumeran una serie de casos en los que se verifica un determinado fenómeno (que ciertos mamíferos prehistóricos tenían pelo largo). Y, sobre la base de los casos enumerados, se generaliza la aplicación de la propiedad (en este caso, la de tener pelo largo) hacia todos los casos de ese tipo, i.e., hacia todos los mamíferos prehistóricos."
      },
      {
        "id": "Ejercicio 10",
        "question": "Tras clasificar los distintos tipos de argumentos inductivos establecimos criterios específicos para su evaluación. Atendiendo a esto, determiná qué premisa sirve para fortalecer el siguiente argumento inductivo sin que deje de ser un argumento inductivo por analogía. Seleccioná una opción y escribí el número en la grilla de resolución. El mamut, el mastodonte y el rinoceronte lanudo eran mamíferos prehistóricos que tenían colmillos largos, de lo cual podemos inferir que seguramente el megaterio, que también era un mamífero prehistórico, tenía colmillos largos.",
        "options": [
          {
            "text": "Todos los mamíferos prehistóricos tenían colmillos largos.",
            "is_correct": false
          },
          {
            "text": "El tigre dientes de sable era un mamífero prehistórico que tenía colmillos largos.",
            "is_correct": true
          },
          {
            "text": "El 70% de los mamíferos prehistóricos tenían colmillos largos.",
            "is_correct": false
          },
          {
            "text": "Algunos mamíferos prehistóricos no tenían colmillos largos.",
            "is_correct": false
          }
        ],
        "explanation": "En un argumento inductivo por analogía, concluimos que un objeto o clase tiene una propiedad por su semejanza con otros objetos o clases que sabemos que tienen esa propiedad. En este caso, el argumento inductivo por analogía más fuerte es aquel en el cual es mayor la cantidad de objetos o clases semejantes que sabemos que tienen la misma propiedad."
      }
    ]
  },
  {
    "id": "tema_11",
    "title": "1º Parcial - Tema 11",
    "questions": [
      {
        "id": "Ejercicio 1",
        "question": "A. Comenzamos la Unidad 1 caracterizando los argumentos. Atendiendo a esto, determiná si el siguiente fragmento es un argumento. Escribí \"SI\" o \"NO\" donde dice \"A\" en la grilla de resolución. Se cree que el megalodón era caníbal. Puesto que si un fósil de diente tiene marcas de mordidas de otros dientes de la misma especie, se considera que existieron prácticas de canibalismo. Y, en efecto, los fósiles de megalodón encontrados tienen dichas marcas. B. Seleccioná la opción que justifica tu respuesta y escribí el número donde dice \"B\" en la grilla de resolución.",
        "options": [
          {
            "text": "porque hay un condicional verdadero.",
            "is_correct": false
          },
          {
            "text": "porque hay más de un enunciado.",
            "is_correct": false
          },
          {
            "text": "porque su conclusión es verdadera.",
            "is_correct": false
          },
          {
            "text": "porque se pueden identificar premisas y conclusión.",
            "is_correct": true
          }
        ],
        "explanation": "En este ejercicio se pide que determines si el fragmento es un argumento. Para ello es importante tener presente que en todo argumento hay enunciados que se ofrecen como razones (las premisas) a favor de otro que se pretende concluir o establecer (la conclusión). Recordá que hay ciertas expresiones que, cuando están, nos ayudan a distinguir las premisas de la conclusión. En el libro de la cátedra las denominamos “indicador de premisa” e “indicador de conclusión”. En este caso, hay un indicador de premisas, esto es, \"puesto que\"."
      },
      {
        "id": "Ejercicio 2",
        "question": "Dado el siguiente argumento, indicá cuáles son sus premisas. Seleccioná dos opciones y escribí los números en la grilla de resolución. El cerdo infernal tenía una mandíbula fuerte y dientes capaces de triturar huesos. Asimismo, su tamaño y fuerza le permitían cazar y robar comida a otros depredadores. En consecuencia, es considerado un carnívoro oportunista.",
        "options": [
          {
            "text": "El tamaño y fuerza del cerdo infernal le permitían cazar y robar comida a otros depredadores.",
            "is_correct": true
          },
          {
            "text": "Asimismo, su tamaño y fuerza le permitían cazar y robar comida a otros depredadores.",
            "is_correct": false
          },
          {
            "text": "El cerdo infernal es considerado un carnívoro oportunista.",
            "is_correct": false
          },
          {
            "text": "El cerdo infernal tenía una mandíbula fuerte y dientes capaces de triturar huesos.",
            "is_correct": true
          }
        ],
        "explanation": "Para identificar la respuesta es importante recordar que hay ciertas expresiones que, cuando están, nos ayudan a identificar las premisas y la conclusión de un argumento. En el libro las llamamos indicadores de premisa y de conclusión, respectivamente. En el argumento dado hay un indicador de conclusión, a saber, \"en consecuencia\". Es importante recordar dos cosas: (i) tanto las premisas como la conclusión se deben enunciar de manera completa, y (ii) los indicadores nunca forman parte de las premisas o la conclusión."
      },
      {
        "id": "Ejercicio 3",
        "question": "Los argumentos están compuestos por enunciados. Estos enunciados pueden combinarse mediante expresiones lógicas dando lugar a enunciados complejos. Dados los siguientes enunciados verdaderos: - Los mamuts habitaron los bosques de América del Norte. - Los mamuts se alimentaban de arbustos. Determiná cuál de los siguientes enunciados complejos es falso. Seleccioná una opción y escribí el número en la grilla de resolución.",
        "options": [
          {
            "text": "Si los mamuts habitaron los bosques de América del Norte entonces se alimentaban de arbustos.",
            "is_correct": false
          },
          {
            "text": "Si los mamuts habitaron los bosques de América del Norte entonces no se alimentaban de arbustos.",
            "is_correct": true
          },
          {
            "text": "O los mamuts no habitaron los bosques de América del Norte o se alimentaban de arbustos.",
            "is_correct": false
          },
          {
            "text": "Los mamuts habitaron los bosques de América del Norte y se alimentaban de arbustos.",
            "is_correct": false
          }
        ],
        "explanation": "En este ejercicio tuviste que evaluar el valor veritativo de una conjunción, una negación, una disyunción y un condicional: 1.        Las conjunciones pueden expresarse con “y”, “,”, “además”, “pero”. Las negaciones con “no”, “ no es cierto que”. Los condicionales con “si… entonces” y las disyunciones con “o”, “ o bien … o bien”. 2.        Las conjunciones son verdaderas sólo en el caso en que ambos conyuntos sean verdaderos, esto es, basta que uno de los enunciados combinados por la conjunción sea falso, para que el enunciado complejo resulte falso. 3.        Cuando un enunciado es verdadero, su negación es falsa y, a la inversa, cuando un enunciado es falso, su negación resultará verdadera. 4.        Los enunciados condicionales son falsos únicamente cuando el antecedente es verdadero y el consecuente falso, en el resto de los casos son verdaderos. 5.         Hay dos tipos de disyunciones, las inclusivas y las exclusivas. Expresiones como “o bien… o bien” sugieren que se trata de una disyunción exclusiva, en cambio la mera presencia de una “o” nos conduce a pensar que es inclusiva. Cuando ambas partes son falsas, la disyunción entre ambas es falsa, no importa el tipo de disyunción del cual se trate. Por el contrario, cuando uno de los disyuntos es verdadero y el otro falso, la disyunción es verdadera. El caso en que ambos tipos de disyunciones arrojan valores diferentes es aquel en que ambos disyuntos son verdaderos. Si la disyunción es inclusiva, el enunciado complejo será verdadero; si es exclusiva, será falso. En este ejercicio el enunciado complejo falso es el condicional, dado que tiene antecedente verdadero y consecuente falso."
      },
      {
        "id": "Ejercicio 4",
        "question": "Al estudiar los enunciados, los distinguimos por su alcance. Dados los siguientes cuatro enunciados determiná cuál de ellos es un enunciado probabilístico. Seleccioná una opción y escribí el número en la grilla de resolución.",
        "options": [
          {
            "text": "Algunos leones de las cavernas tienen rayas.",
            "is_correct": false
          },
          {
            "text": "El león de las cavernas más grande pesó 360 kg.",
            "is_correct": false
          },
          {
            "text": "Todos los leones de las cavernas son mamíferos.",
            "is_correct": false
          },
          {
            "text": "El 85% de los leones de las cavernas vivía en manada.",
            "is_correct": true
          }
        ],
        "explanation": "En este ejercicio se te pide que reconozcas un enunciado probabilístico. Un enunciado de este tipo asigna una probabilidad a la ocurrencia de un fenómeno o un conjunto de fenómenos. Así, la respuesta es \"El 85% de los leones de las cavernas vivía en manada\"."
      },
      {
        "id": "Ejercicio 5",
        "question": "Los enunciados se clasifican según su alcance y ello determina sus condiciones de verdad. Dado el siguiente enunciado determiná en qué situación resultaría verdadero. Seleccioná una opción y escribí el número en la grilla de resolución. Algunos titanosaurios miden más de 4 metros de altura.",
        "options": [
          {
            "text": "Si encontramos un animal que es un ictiosaurio y mide 4.5 metros de altura.",
            "is_correct": false
          },
          {
            "text": "Si encontramos un animal que es un titanosaurio y mide 4.5 metros de altura.",
            "is_correct": true
          },
          {
            "text": "Si encontramos un animal que es un ictiosaurio y mide 1.5 metros de altura.",
            "is_correct": false
          },
          {
            "text": "Si encontramos un animal que es un titanosaurio y mide 3 metros de altura.",
            "is_correct": false
          }
        ],
        "explanation": "El enunciado propuesto es un enunciado existencial. Para que un enunciado existencial sea verdadero, basta con encontrar un caso de un miembro del conjunto al que se refiere que posea la propiedad asignada. En este caso, la existencia de un animal que sea un titanosaurio y mida 4.5 metros de altura basta para afirmar que el enunciado es verdadero."
      },
      {
        "id": "Ejercicio 6",
        "question": "Otro modo de clasificar los enunciados es agruparlos en tautologías, contradicciones o contingencias. Identificá cuál de los siguientes enunciados es una contingencia. Seleccioná una opción y escribí el número en la grilla de resolución.",
        "options": [
          {
            "text": "Los dinosaurios eran animales terrestres o no eran animales terrestres.",
            "is_correct": false
          },
          {
            "text": "Los dinosaurios eran animales terrestres y no eran animales terrestres.",
            "is_correct": false
          },
          {
            "text": "Los dinosaurios eran animales terrestres y tenían columna vertebral.",
            "is_correct": true
          },
          {
            "text": "Si los dinosaurios tenían columna vertebral entonces tenían columna vertebral.",
            "is_correct": false
          }
        ],
        "explanation": "En este ejercicio se pide que reconozcas una contingencia. Para ello es importante tener en cuenta que: - Las tautologías son aquellos enunciados que son necesariamente verdaderos, no son meras verdades, sino que por la forma de la oración, sea como sea el mundo, será verdadera. - Las contradicciones son necesariamente falsas. -A diferencia de las tautologías y las contradicciones, las contingencias son enunciados que tal vez sean verdaderos o tal vez falsos, pero no son necesariamente ninguna de las dos cosas. Aun enunciados que nos parecen obviamente verdaderos serán contingentes si su verdad depende de cuestiones empíricas y no de la estructura misma de la oración. En este ejercicio tenemos que el valor de verdad de  \"Los dinosaurios eran animales terrestres y tenían columna vertebral\" depende de si efectivamente los dinosaurios eran animales terrestres y de si efectivamente tenían columna vertebral. Actualmente sabemos que así era, lo cual hace verdadero al enunciado. Sin embargo, no es difícil imaginar una situación en que la evolución de este animal haya sido distinta y, por ejemplo, que no haya tenido columna vertebral. Este hecho posible volvería falso al enunciado. Por lo cual, este enunciado es una contingencia: su verdad no es necesaria sino que depende de los hechos."
      },
      {
        "id": "Ejercicio 7",
        "question": "Al caracterizar los argumentos deductivos introdujimos la noción de validez. Dados los siguientes enunciados, determiná qué conclusión se infiere de modo válido. Si los tigres dientes de sable presentan cicatrices de heridas graves, entonces compartían alimento. Si los tigres dientes de sable compartían alimento, entonces vivian en grupo. Seleccioná una opción y escribí el número en la grilla de resolución.",
        "options": [
          {
            "text": "Si los tigres dientes de sable vivian en grupo, entonces compartían alimento.",
            "is_correct": false
          },
          {
            "text": "Si los tigres dientes de sable compartían alimento, entonces podían cicatrizar heridas graves.",
            "is_correct": false
          },
          {
            "text": "Si los tigres dientes de sable presentan cicatrices de heridas graves, entonces vivian en grupo.",
            "is_correct": true
          },
          {
            "text": "Los tigres dientes de sable vivian en grupo.",
            "is_correct": false
          }
        ],
        "explanation": "En este ejercicio se te pide que elijas qué enunciado de la lista puede funcionar como la conclusión de un argumento válido dada las premisas propuestas. Los argumentos válidos se pueden reconocer de modos diferentes.Por un lado, porque si suponemos  que las premisas son todas verdaderas, entonces necesariamente hemos de admitir que la conclusión es verdadera también. Por otro lado, podemos atender a su estructura: si reconocemos alguna estructura de las presentadas oportunamente en el material de lectura, tales como el Modus Ponens , Modus Tollens , Silogismo disyuntivo, Instanciación del universal, etc., sabemos que estamos frente a una forma válida. En este caso, la opción 3 es el único enunciado que se puede inferir en forma válida, ya que es un caso de Silogismo Hipotético. Recordá lo siguiente: lo que hace que un argumento sea válido o inválido no es que sus premisas y conclusión sean de hecho verdaderas o falsas; lo que lo hace válido o inválido es su forma ."
      },
      {
        "id": "Ejercicio 8",
        "question": "Determiná cuál de los siguientes argumentos es inválido. Seleccioná una opción y escribí el número en la grilla de resolución.",
        "options": [
          {
            "text": "El león de las cavernas caza peces en el océano o herbívoros terrestres. Como el león de las cavernas no caza herbívoros terrestres, se sigue que caza peces en el océano.",
            "is_correct": false
          },
          {
            "text": "Si el mamut pone huevos, entonces tiene múltiples crías. No es cierto que el mamut pone huevos, lo cual prueba que no tiene múltiples crías.",
            "is_correct": true
          },
          {
            "text": "Si el mamut tiene colmillos, entonces sus colmillos son dientes caninos. Pero los colmillos del mamut no son dientes caninos, por consiguiente no tiene colmillos.",
            "is_correct": false
          },
          {
            "text": "Si el tiburón megalodón habita zonas cálidas, entonces el enfriamiento oceánico lo lleva a la extinción. En efecto, habita zonas cálidas. En consecuencia, el enfriamiento oceánico lleva a la extinción al tiburón megalodón.",
            "is_correct": false
          }
        ],
        "explanation": "En este ejercicio se te pide que reconozcas un argumento inválido. Los argumentos inválidos se pueden reconocer de modos diferentes. Por un lado, porque resulta concebible que las premisas sean verdaderas y la conclusión no. Por otro lado, si atendemos a su estructura , y reconocemos un argumento inductivo o una falacia, sabremos que estamos frente a una forma inválida. En este caso el único argumento inválido es una falacia de negación del antecedente. Recordá lo siguiente: lo que hace que un argumento sea válido o inválido no es que sus premisas y conclusión sean de hecho verdaderas o falsas; lo que lo hace válido o inválido es su forma . En particular, un argumento inválido puede tener premisas verdaderas y una conclusión verdadera."
      },
      {
        "id": "Ejercicio 9",
        "question": "Al presentar los argumentos inductivos distinguimos tres tipos: por enumeración incompleta, por analogía y silogismos inductivos. Dado el siguiente conjunto de enunciados: ...................................................................... ....................................................................... El mamut era un depredador. Seleccioná cuáles de los siguientes enunciados corresponden a las premisas faltantes, de modo tal que el argumento resulte un silogismo inductivo. Escribí en la grilla de resolución las opciones seleccionadas como premisas donde dice \"P1\" y \"P2\".",
        "options": [
          {
            "text": "El mamut era un animal grande de la Edad de Hielo.",
            "is_correct": true
          },
          {
            "text": "El lobo era un depredador.",
            "is_correct": false
          },
          {
            "text": "Todos los animales grandes de la Edad de Hielo eran depredadores.",
            "is_correct": false
          },
          {
            "text": "La mayoría de los animales grandes de la Edad de Hielo eran depredadores.",
            "is_correct": true
          },
          {
            "text": "El tigre dientes de sable era un animal grande de la Edad de Hielo y era depredador.",
            "is_correct": false
          }
        ],
        "explanation": "Los silogismos inductivos son tales que se formula una generalización estadística o probabilística y se subsume un caso, para inferir que ese caso también responde a lo establecido por la generalización. En este ejercicio, inferimos que el mamut es un depredador, dado que es un animal grande de la Edad de Hielo. El orden de las premisas P1 y P2 es intercambiable. Tené en cuenta que si la premisa fuera un enunciado universal (\"Todos\" en lugar de \"La mayoría\"), el argumento ya no sería inductivo sino deductivo."
      },
      {
        "id": "Ejercicio 10",
        "question": "Tras clasificar los distintos tipos de argumentos inductivos establecimos criterios específicos para su evaluación. Atendiendo a esto, determiná qué premisa sirve para fortalecer el siguiente argumento inductivo sin que deje de ser un argumento inductivo por analogía. Seleccioná una opción y escribí el número en la grilla de resolución. El pterodáctilo, el tapejara y el dimorfodón eran repitles prehistóricos que tenían el pico curvo, de lo cual podemos inferir que seguramente el pteranodon, que también era un reptil prehistórico, tenía pico curvo.",
        "options": [
          {
            "text": "Todos los reptiles prehistóricos tenían el pico curvo.",
            "is_correct": false
          },
          {
            "text": "Algunos reptiles prehistóricos no tenían el pico curvo.",
            "is_correct": false
          },
          {
            "text": "El 85% de los reptiles prehistóricos tenían el pico curvo.",
            "is_correct": false
          },
          {
            "text": "El ranforrinco era un reptil prehistórico que tenía el pico curvo.",
            "is_correct": true
          }
        ],
        "explanation": "En un argumento inductivo por analogía, concluimos que un objeto o clase tiene una propiedad por su semejanza con otros objetos o clases que sabemos que tienen esa propiedad. En este caso, el argumento inductivo por analogía más fuerte es aquel en el cual es mayor la cantidad de objetos o clases semejantes que sabemos que tienen la propiedad."
      }
    ]
  },
  {
    "id": "tema_12",
    "title": "1º Parcial - Tema 12",
    "questions": [
      {
        "id": "Ejercicio 1",
        "question": "A. Comenzamos la Unidad 1 caracterizando los argumentos. Atendiendo a esto, determiná si el siguiente fragmento es un argumento. Escribí \"SI\" o \"NO\" donde dice \"A\" en la grilla de resolución. Se cree que el megalodón era caníbal. Puesto que si un fósil de diente tiene marcas de mordidas de otros dientes de la misma especie, se considera que existieron prácticas de canibalismo. Y, en efecto, los fósiles de megalodón encontrados tienen dichas marcas. B. Seleccioná la opción que justifica tu respuesta y escribí el número donde dice \"B\" en la grilla de resolución.",
        "options": [
          {
            "text": "porque hay más de un enunciado.",
            "is_correct": false
          },
          {
            "text": "porque se pueden identificar premisas y conclusión.",
            "is_correct": true
          },
          {
            "text": "porque su conclusión es verdadera.",
            "is_correct": false
          },
          {
            "text": "porque hay un condicional verdadero.",
            "is_correct": false
          }
        ],
        "explanation": "En este ejercicio se pide que determines si el fragmento es un argumento. Para ello es importante tener presente que en todo argumento hay enunciados que se ofrecen como razones (las premisas) a favor de otro que se pretende concluir o establecer (la conclusión). Recordá que hay ciertas expresiones que, cuando están, nos ayudan a distinguir las premisas de la conclusión. En el libro de la cátedra las denominamos “indicador de premisa” e “indicador de conclusión”. En este caso, hay un indicador de premisas, esto es, \"puesto que\"."
      },
      {
        "id": "Ejercicio 2",
        "question": "Dado el siguiente argumento, indicá cuáles son sus premisas. Seleccioná dos opciones y escribí los números en la grilla de resolución. El cerdo infernal tenía una mandíbula fuerte y dientes capaces de triturar huesos. Asimismo, su tamaño y fuerza le permitían cazar y robar comida a otros depredadores. En consecuencia, es considerado un carnívoro oportunista.",
        "options": [
          {
            "text": "El cerdo infernal es considerado un carnívoro oportunista.",
            "is_correct": false
          },
          {
            "text": "El cerdo infernal tenía una mandíbula fuerte y dientes capaces de triturar huesos.",
            "is_correct": true
          },
          {
            "text": "El tamaño y fuerza del cerdo infernal le permitían cazar y robar comida a otros depredadores.",
            "is_correct": true
          },
          {
            "text": "Asimismo, su tamaño y fuerza le permitían cazar y robar comida a otros depredadores.",
            "is_correct": false
          }
        ],
        "explanation": "Para identificar la respuesta es importante recordar que hay ciertas expresiones que, cuando están, nos ayudan a identificar las premisas y la conclusión de un argumento. En el libro las llamamos indicadores de premisa y de conclusión, respectivamente. En el argumento dado hay un indicador de conclusión, a saber, \"en consecuencia\". Es importante recordar dos cosas: (i) tanto las premisas como la conclusión se deben enunciar de manera completa, y (ii) los indicadores nunca forman parte de las premisas o la conclusión."
      },
      {
        "id": "Ejercicio 3",
        "question": "Los argumentos están compuestos por enunciados. Estos enunciados pueden combinarse mediante expresiones lógicas dando lugar a enunciados complejos. Dados los siguientes enunciados verdaderos: - Los mamuts se alimentaban de arbustos. - Los mamuts habitaron los bosques de América del Norte. Determiná cuál de los siguientes enunciados complejos es falso. Seleccioná una opción y escribí el número en la grilla de resolución.",
        "options": [
          {
            "text": "O los mamuts no habitaron los bosques de América del Norte o se alimentaban de arbustos.",
            "is_correct": false
          },
          {
            "text": "Si los mamuts habitaron los bosques de América del Norte entonces se alimentaban de arbustos.",
            "is_correct": false
          },
          {
            "text": "Los mamuts habitaron los bosques de América del Norte y se alimentaban de arbustos.",
            "is_correct": false
          },
          {
            "text": "Si los mamuts habitaron los bosques de América del Norte entonces no se alimentaban de arbustos.",
            "is_correct": true
          }
        ],
        "explanation": "En este ejercicio tuviste que evaluar el valor veritativo de una conjunción, una negación, una disyunción y un condicional: 1.        Las conjunciones pueden expresarse con “y”, “,”, “además”, “pero”. Las negaciones con “no”, “ no es cierto que”. Los condicionales con “si… entonces” y las disyunciones con “o”, “ o bien … o bien”. 2.        Las conjunciones son verdaderas sólo en el caso en que ambos conyuntos sean verdaderos, esto es, basta que uno de los enunciados combinados por la conjunción sea falso, para que el enunciado complejo resulte falso. 3.        Cuando un enunciado es verdadero, su negación es falsa y, a la inversa, cuando un enunciado es falso, su negación resultará verdadera. 4.        Los enunciados condicionales son falsos únicamente cuando el antecedente es verdadero y el consecuente falso, en el resto de los casos son verdaderos. 5.         Hay dos tipos de disyunciones, las inclusivas y las exclusivas. Expresiones como “o bien… o bien” sugieren que se trata de una disyunción exclusiva, en cambio la mera presencia de una “o” nos conduce a pensar que es inclusiva. Cuando ambas partes son falsas, la disyunción entre ambas es falsa, no importa el tipo de disyunción del cual se trate. Por el contrario, cuando uno de los disyuntos es verdadero y el otro falso, la disyunción es verdadera. El caso en que ambos tipos de disyunciones arrojan valores diferentes es aquel en que ambos disyuntos son verdaderos. Si la disyunción es inclusiva, el enunciado complejo será verdadero; si es exclusiva, será falso. En este ejercicio el enunciado complejo falso es el condicional, dado que tiene antecedente verdadero y consecuente falso."
      },
      {
        "id": "Ejercicio 4",
        "question": "Al estudiar los enunciados, los distinguimos por su alcance. Dados los siguientes cuatro enunciados determiná cuál de ellos es un enunciado probabilístico. Seleccioná una opción y escribí el número en la grilla de resolución.",
        "options": [
          {
            "text": "Algunos leones de las cavernas tienen rayas.",
            "is_correct": false
          },
          {
            "text": "El 85% de los leones de las cavernas vivía en manada.",
            "is_correct": true
          },
          {
            "text": "El león de las cavernas más grande pesó 360 kg.",
            "is_correct": false
          },
          {
            "text": "Todos los leones de las cavernas son mamíferos.",
            "is_correct": false
          }
        ],
        "explanation": "En este ejercicio se te pide que reconozcas un enunciado probabilístico. Un enunciado de este tipo asigna una probabilidad a la ocurrencia de un fenómeno o un conjunto de fenómenos. Así, la respuesta es \"El 85% de los leones de las cavernas vivía en manada\"."
      },
      {
        "id": "Ejercicio 5",
        "question": "Los enunciados se clasifican según su alcance y ello determina sus condiciones de verdad. Dado el siguiente enunciado determiná en qué situación resultaría verdadero. Seleccioná una opción y escribí el número en la grilla de resolución. Algunos titanosaurios miden más de 4 metros de altura.",
        "options": [
          {
            "text": "Si encontramos un animal que es un titanosaurio y mide 4.5 metros de altura.",
            "is_correct": true
          },
          {
            "text": "Si encontramos un animal que es un ictiosaurio y mide 1.5 metros de altura.",
            "is_correct": false
          },
          {
            "text": "Si encontramos un animal que es un ictiosaurio y mide 4.5 metros de altura.",
            "is_correct": false
          },
          {
            "text": "Si encontramos un animal que es un titanosaurio y mide 3 metros de altura.",
            "is_correct": false
          }
        ],
        "explanation": "El enunciado propuesto es un enunciado existencial. Para que un enunciado existencial sea verdadero, basta con encontrar un caso de un miembro del conjunto al que se refiere que posea la propiedad asignada. En este caso, la existencia de un animal que sea un titanosaurio y mida 4.5 metros de altura basta para afirmar que el enunciado es verdadero."
      },
      {
        "id": "Ejercicio 6",
        "question": "Otro modo de clasificar los enunciados es agruparlos en tautologías, contradicciones o contingencias. Identificá cuál de los siguientes enunciados es una contingencia. Seleccioná una opción y escribí el número en la grilla de resolución.",
        "options": [
          {
            "text": "Los dinosaurios eran animales terrestres y no eran animales terrestres.",
            "is_correct": false
          },
          {
            "text": "Los dinosaurios eran animales terrestres y tenían columna vertebral.",
            "is_correct": true
          },
          {
            "text": "Si los dinosaurios tenían columna vertebral entonces tenían columna vertebral.",
            "is_correct": false
          },
          {
            "text": "Los dinosaurios eran animales terrestres o no eran animales terrestres.",
            "is_correct": false
          }
        ],
        "explanation": "En este ejercicio se pide que reconozcas una contingencia. Para ello es importante tener en cuenta que: - Las tautologías son aquellos enunciados que son necesariamente verdaderos, no son meras verdades, sino que por la forma de la oración, sea como sea el mundo, será verdadera. - Las contradicciones son necesariamente falsas. -A diferencia de las tautologías y las contradicciones, las contingencias son enunciados que tal vez sean verdaderos o tal vez falsos, pero no son necesariamente ninguna de las dos cosas. Aun enunciados que nos parecen obviamente verdaderos serán contingentes si su verdad depende de cuestiones empíricas y no de la estructura misma de la oración. En este ejercicio tenemos que el valor de verdad de  \"Los dinosaurios eran animales terrestres y tenían columna vertebral\" depende de si efectivamente los dinosaurios eran animales terrestres y de si efectivamente tenían columna vertebral. Actualmente sabemos que así era, lo cual hace verdadero al enunciado. Sin embargo, no es difícil imaginar una situación en que la evolución de este animal haya sido distinta y, por ejemplo, que no haya tenido columna vertebral. Este hecho posible volvería falso al enunciado. Por lo cual, este enunciado es una contingencia: su verdad no es necesaria, sino que depende de los hechos."
      },
      {
        "id": "Ejercicio 7",
        "question": "Al caracterizar los argumentos deductivos introdujimos la noción de validez. Dados los siguientes enunciados, determiná qué conclusión se infiere de modo válido. Si los tigres dientes de sable presentan cicatrices de heridas graves, entonces compartían alimento. Si los tigres dientes de sable compartían alimento, entonces vivian en grupo. Seleccioná una opción y escribí el número en la grilla de resolución.",
        "options": [
          {
            "text": "Si los tigres dientes de sable compartían alimento, entonces podían cicatrizar heridas graves.",
            "is_correct": false
          },
          {
            "text": "Si los tigres dientes de sable vivian en grupo, entonces compartían alimento.",
            "is_correct": false
          },
          {
            "text": "Los tigres dientes de sable vivian en grupo.",
            "is_correct": false
          },
          {
            "text": "Si los tigres dientes de sable presentan cicatrices de heridas graves, entonces vivian en grupo.",
            "is_correct": true
          }
        ],
        "explanation": "En este ejercicio se te pide que elijas qué enunciado de la lista puede funcionar como la conclusión de un argumento válido dada las premisas propuestas. Los argumentos válidos se pueden reconocer de modos diferentes. Por un lado, porque si suponemos  que las premisas son todas verdaderas, entonces necesariamente hemos de admitir que la conclusión es verdadera también. Por otro lado, podemos atender a su estructura: si reconocemos alguna estructura de las presentadas oportunamente en el material de lectura, tales como el Modus Ponens , Modus Tollens , Silogismo disyuntivo, Instanciación del universal, etc., sabemos que estamos frente a una forma válida. En este caso, la opción 4 es el único enunciado que se puede inferir en forma válida, ya que es un caso de Silogismo Hipotético. Recordá lo siguiente: lo que hace que un argumento sea válido o inválido no es que sus premisas y conclusión sean de hecho verdaderas o falsas; lo que lo hace válido o inválido es su forma ."
      },
      {
        "id": "Ejercicio 8",
        "question": "Determiná cuál de los siguientes argumentos es inválido. Seleccioná una opción y escribí el número en la grilla de resolución.",
        "options": [
          {
            "text": "Si el mamut pone huevos, entonces tiene múltiples crías. No es cierto que el mamut pone huevos, lo cual prueba que no tiene múltiples crías.",
            "is_correct": true
          },
          {
            "text": "El león de las cavernas caza peces en el océano o herbívoros terrestres. Como el león de las cavernas no caza herbívoros terrestres, se sigue que caza peces en el océano.",
            "is_correct": false
          },
          {
            "text": "Si el tiburón megalodón habita zonas cálidas, entonces el enfriamiento oceánico lo lleva a la extinción. En efecto, habita zonas cálidas. En consecuencia, el enfriamiento oceánico lleva a la extinción al tiburón megalodón.",
            "is_correct": false
          },
          {
            "text": "Si el mamut tiene colmillos, entonces sus colmillos son dientes caninos. Pero los colmillos del mamut no son dientes caninos, por consiguiente no tiene colmillos.",
            "is_correct": false
          }
        ],
        "explanation": "En este ejercicio se te pide que reconozcas un argumento inválido. Los argumentos inválidos se pueden reconocer de modos diferentes. Por un lado, porque resulta concebible que las premisas sean verdaderas y la conclusión no. Por otro lado, si atendemos a su estructura , y reconocemos un argumento inductivo o una falacia, sabremos que estamos frente a una forma inválida. En este caso el único argumento inválido es una falacia de negación del antecedente. Recordá lo siguiente: lo que hace que un argumento sea válido o inválido no es que sus premisas y conclusión sean de hecho verdaderas o falsas; lo que lo hace válido o inválido es su forma . En particular, un argumento inválido puede tener premisas verdaderas y una conclusión verdadera."
      },
      {
        "id": "Ejercicio 9",
        "question": "Al presentar los argumentos inductivos distinguimos tres tipos: por enumeración incompleta, por analogía y silogismos inductivos. Dado el siguiente conjunto de enunciados: ....................................................................... ...................................................................... El mamut era un depredador. Seleccioná cuáles de los siguientes enunciados corresponden a las premisas faltantes, de modo tal que el argumento resulte un silogismo inductivo. Escribí en la grilla de resolución las opciones seleccionadas como premisas donde dice \"P1\" y \"P2\".",
        "options": [
          {
            "text": "El lobo era un depredador.",
            "is_correct": false
          },
          {
            "text": "Todos los animales grandes de la Edad de Hielo eran depredadores.",
            "is_correct": false
          },
          {
            "text": "El tigre dientes de sable era un animal grande de la Edad de Hielo y era depredador.",
            "is_correct": false
          },
          {
            "text": "La mayoría de los animales grandes de la Edad de Hielo eran depredadores.",
            "is_correct": true
          },
          {
            "text": "El mamut era un animal grande de la Edad de Hielo.",
            "is_correct": true
          }
        ],
        "explanation": "Los silogismos inductivos son tales que se formula una generalización estadística o probabilística y se subsume un caso, para inferir que ese caso también responde a lo establecido por la generalización. En este ejercicio, inferimos que el mamut es un depredador, dado que es un animal grande de la Edad de Hielo. El orden de las premisas P1 y P2 es intercambiable. Tené en cuenta que si la premisa fuera un enunciado universal (\"Todos\" en lugar de \"La mayoría\"), el argumento ya no sería inductivo sino deductivo."
      },
      {
        "id": "Ejercicio 10",
        "question": "Tras clasificar los distintos tipos de argumentos inductivos establecimos criterios específicos para su evaluación. Atendiendo a esto, determiná qué premisa sirve para fortalecer el siguiente argumento inductivo sin que deje de ser un argumento inductivo por analogía. Seleccioná una opción y escribí el número en la grilla de resolución. El pterodáctilo, el tapejara y el dimorfodón eran repitles prehistóricos que tenían el pico curvo, de lo cual podemos inferir que seguramente el pteranodon, que también era un reptil prehistórico, tenía pico curvo.",
        "options": [
          {
            "text": "El ranforrinco era un reptil prehistórico que tenía el pico curvo.",
            "is_correct": true
          },
          {
            "text": "El 85% de los reptiles prehistóricos tenían el pico curvo.",
            "is_correct": false
          },
          {
            "text": "Algunos reptiles prehistóricos no tenían el pico curvo.",
            "is_correct": false
          },
          {
            "text": "Todos los reptiles prehistóricos tenían el pico curvo.",
            "is_correct": false
          }
        ],
        "explanation": "En un argumento inductivo por analogía, concluimos que un objeto o clase tiene una propiedad por su semejanza con otros objetos o clases que sabemos que tienen esa propiedad. En este caso, el argumento inductivo por analogía más fuerte es aquel en el cual es mayor la cantidad de objetos o clases semejantes que sabemos que tienen la propiedad."
      }
    ]
  }
];
