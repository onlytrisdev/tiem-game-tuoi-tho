var Preloader = cc.Scene.extend({
    _interval: null,
    _label: null,
    _className: "PreloaderScene",
    _layerBgBar: null,
    _layerBar: null,

    ctor: function() {
        this._super();

        cc._loaderImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQEAAAEACAYAAACzsMNYAAAnGUlEQVR4AezWXUhTYRgHcOmqiy4ClZDQFV6oRLSiiyixRWIEcQqCbEQj+wiiqEHaR+S0iyhYEmaxcLOxkMS0DyvJGBUYVKKwCoosYREhMYJRCBEFT3sudmHHdfQ97uw95/wP/O7Oe/Y/D+f9782bdLm881PCKckUsiQAiKXsylNdLq8Tmx/AVsL/lkAMQwGwHW+6AFwYBoAtxdMl0IxhANjUdEpg3v42KvL3A4DJFDbdpLnuc+IlMKfmGC1sjdLizhHzAgD+IxcrgfwTndYYAgDwiWBGJcCnAAsNAAAWnL0zoxLg1rDQAADAce25zUsAAGa7BAAAJQAAKIENj8foQuIXBScoBwCg4WOSnLff5KYENg/GJRgCALQl/9Cq+++MLQFuHgwfQB6Nn34YWwLbXnzG4AEkU9EdM64EPCPjGDqAZFwDoxKVAACgBLoSCRoa7s46//XLdL4/SsGXMZX6SBeF7j6k4dejk/RGB+lgoIPvEebr6aPTVy/qzs4ZM2XnnJxXS2N7hPPwOl2UU82cCyTz5O1TiiQnzFUCHPxnZKsh2vetpNrtbgqGwir1DcfJV+um37fuqVQ4FlHrpSt8nxBeW1pSRO9bNgpnf3SyihRly5TPr9u9h1rq9nJWTWOBEJWVlfM6XVavqeRMnA0k863nAPV+iZujBAY+DBk3HI2N5Gs6Q55166fcOB2HjqTXCeOSqSovFM7OBeJcviLjsw9vUjjrtPB78ho978Pz2lnpwKaT1PcbHj4RyF8C431HDS+B6uqajB/22iVLeZNk5TTA+Lf9O5YJ5y8uLtHKbuhpIL+ggL4GFGw6ST179UD+EsjBYP778Zf+be9cYC0r67OffPn4ood838ynM9Iz1DngjDozwgwwiDMIpxTIdKRAgfGiGS+iRcMFJaitIFgUtQJOKILVWiuBcJHhMgECiVWjNTEVhdiQYkmooUbbEjUSYy/IhdX5BR6z5s1ae7/v2u9+z1pzHpIn55x99mWz5zy/93/5v+9aOYdJ2qIBQmDut2BpwfqVS1ufG0DwPktGA6RWgprVO5FqGwKpqymA+Pn1N7caZ8MBB1afvuyKhUoLCL8Jw1tz9Pt3XFU0GgBqgGlQ5jAEDAEM2PZHTd7/9Y9/qs04/E7GWZC04KJT11Vnn31u26pMtFI8GqBOocjGKi1DIONqGl9lP/mITTJi6bRAhc3o4mCBaIDPDDj10ASWIRC/mkZ1CCTShdnlyzFy8bSAItwo05Ku8B5LRQMC2tyymR6awDIE4lfTZCPd/qcXEgYvRFqA4UYWB4FUgWhgACmBZQjEr6bxxcGSaUF6OgNUAFRqNEB7cZJogJQgQ5fAMgQKau3KZfzxTmQkpQWTdgsAyUmHrcg29ZhaF1DBk+6CuwTDlyGQvprGGGnq3QLC6Z3v3zzx5CBiqCnK/Jnbn6QiPRocsgyB7qtpqpEAxoQjxZiP6AQTTRrJAIj4eYFgGErTlF3EZ8DnavP1RoZA99U0ffCGVXTCfjsmonORo80ZHcnEj0YPcS+BZQh0X03J05OMRIWdkeMJ24YUCYkGukcyatm95CVdIMAuSiDS9f3zmQ7HJIaAIXDOltUjV2+Kfqnh9IRtQwwYtZoCCnLw3CkBMON53SosL0OgvCjEjcqB+V2nMVxW6El35sUYiWo8q35yJBPR+iS0L18XsAyB8iL8HlWsS9qeq7Yh9QFMNOVogL48983eJaA92rFdSGRFhGUDFpAhUKBVqPBWG4piRRiu+kD+aCCtuImhOxYIO7/31FFoyxDodUrAyqa9BAXrA9qUM1FKANwI7btAgFSClKLjvIANmFGGQAHNLlvCH+/IMWIKZpijYH1AnYJJUgIM2em9E810hRgRyH2XHmcTZpQhUKBLwKoXHw0UqQ9QZMPkY1MCjD4iotDhqamizUiU0eV9a/pxGDIEDAFWLVa9aUQDrKiYtIuZeExM350cnCJmy3OQ33dOCYBIl+Jg3vMFLEOggGSk3NEA4pCSrtV2HjduVaUlR10jd4EQgPFYTw6WlyFQWhFGUjTQZQBHW3VJOboYih2GBVudYZdgwB0CyxBIHyMeGbYTDcSbKd9pRKQT5P5j6hqE7lHpTIFThyi2Ds4whoAhQB6r3YDT6L3zOMw4lXYhkBjx3EQhGLrTe+6wQ5L3MjjDGAKGAO24se1CQuuum3NUbKNtOIUCIWkD6cPIASQiktQIhkhkahCwDIHf3LStV7r49WvHVsRZGbu23TAVeTYwSS0Q/u1H5ke+9699dJ77ZW8X0ubscHZi3HUKLUOguve0XunxW0+qVixfwuo75lzAufgcO8NpROTl7zx+buz7P+RlS0a2C6lLdIleUusCgPKbl81P/d/rmTsn19O3n1Y9ddu2aD15S8SCcqMhMFgIoEu2rx2bB5NjM5JbMi1YNTc79r1fe/5GooFR5mSkOX9dIB4C1j3NMAphU4fKE9cbAsWjgXUHju4UaHMRBimUFhBiY/Kx7/+A/WZ43lwHjhDx8P9qCPRAz979PDR2PQ+NnYo8DIHcwmyYbmyRECNj6BJpAUW/UzavmDQa4HfJ0QDpjyEwHEgobfneA4bAJCK/Hjf3T0iffnhH92sXUOEnUpkoGuB2in2Jw05EEYbAwPTAQ4bAROKPOGal5j6s6h3TAp09kCkliI8GeM/5i4OGQEkZAgVERZ7W2hTTAvYWYJqsKQE6Zr32Q0w8Ssx75HMwBIYgQ6BAyzB/WkCxDmNmTQkUyeSIBrgfxjYE+ilDoECRMKY6juHoFky7SEhKsOviTdHRAGH8hHshtKNwUULAEDAEZKZxBTwN4ygtmNpFQUkJYgaH0KPXbmXsN0c9I6WTATR5bRuxgAyBApKZYtICQBGurvkvER43OCSdd8pq0pX0aKA7BLivTVhWhkABEYKzwkWF6xTSME6XrbsRBThCc8LtLHUNRQM5zxYg+rAJi8sQKCAq8+PGfTEbJuh6BSAKf1GXM2eFj33fV75nPXn6JNEA94mGAOmTTVhehkC5keJxQ0T8Xm3DqV0PkIGghPeuAaLEaCAdAkDQECgvQ6CgfnDNcVGHh2JkjNNxgCh38Y30gTQiMRpIhwDPxSYsm7C8DIGCIrzGUBH1AVb2aUQD/J73kdzlwKTx0UA6BEiXUt6XZQgMVrTp+IOPKJIxP5C7NkBoT40i2yi0ooFJ9w8APs8IdJEhMMj6AJuMME/E/ACFwtROAQXA3FV44NUpGiA64XEx7UFNNFrdZQgMa36AVXlsoXDzuleR72edG4ifHowaIFI0MAkEKJzagAVkCAy0UJi6hZetxhive6sweWOUooFYCLgzYAgYAtpfgHkiZupTjv7GjOMKkKQkXSIYag5tUQvRQBsEBtQZ8BFm9z9oCBQ/mzCmY8B9MFSuC4MCH0ydMRrQDsNUCAA5pSdTkVU7IPUOnUvYfhahjxcrL4yFEWJ6/LFHfHG/kc9Jh4JIJGM0oPMGkiEAPEiPbNZ0PXvXnucHoie/knp6sSHQmx2HrLAxo8UYPH14KH5XYc5OgSCQr1vhlTve3IbAEFuHOUGgdmHuijzRAGaPuhKzIOA9Axzo2XBU+M5Jjwg3BAyC7od6kF50DcMxLtHEqEuXxVx/QBHJ4ItpWrXjQ/LyMgQGBIIjD5rFHFEgwGTpBcL0EeKEPQXUG9gWHXPEmN5DP8PxMNe+JVy1hy9DYOC7DjH3wWvWsuKnH/bZcYRYHQ0iCHYYNgCG2zTbIAj04Egximgx4bhlCPRomIipwpjtxxovTr8SUNppQ9LSffehLsAKzqrfmmrw2oJA/nHhSGPfYFMbAsMHwcTnELAqszpnaM/Rz+cfVRELKcnIlEAQiC9OUkBLNrZlCBgEdAEwOyCITwnSc3KKeLVpQ9KJpvdGqsH48kgIAKb5dctt7EwyBAwCVl/ac0kpAWZNadHxPri/Vuwvv6/1+ot0CUZCgNbhRaeus/FyyhAwCAjvwwNLMSJdAkwnYf66WcNQPLwGP6v19z99XMXzz69ZXukP5rHPn8zjR446t0GA2794xuE2Xk4ZAgaBWocYX1EAbURCc8xKPj8zM1NxH4RRKc599YL5sX8cV2zfQLSxBwTQSYetACqNqQavi9nbIHHfpcfZeIaAIdABBCM3B2HI8IImGhzicZiT9ADzE8pz+9qVy8auyudsWU0UEUKAxwGHxoIlEUgbBHh9m84QMAQ6jJayeh78ylUYOumCJnQQQlhgUCICTAwQ1q9c2hoVYH4eBzDqtz+843WtNQcijxYI8FqLxViGgCGQfbQUo+pQkugDSykaspK3pRCrVs4KCqz6zRBoXsEBQ1txsAkCAIg0wqYrLkOgwNx4uX42YbhAEHNBkxFz/ACD58OYrOqKCij86fU0E8DvWf1j6gIAg9dsjFTKdwYsQ6Dbyp1vvLQ8CJSXUx9A2v03ypQ8J1EBIGCFV/FOj8XUYcrAY3mOpuJfIwS4bef7N9t05WUIkHM3H8KQunIPBwTk++878eSR04PcVi/4YXwAgFlnly3Rz62rOFBoM3t4exhNWPlkCNwTGnzxbA4BBDGXEwcGbfv7ebyeTzMApAREBIBgbtmMooswnwcSrPqNEABC7a9lpcsQwOS1rZ0qrFmAACO2tQ1JC0YdO4bZWdFDEGxaswIj848JAJo6BEoXmiDQBB1FHd1kGQL+h2rX246aawMBhiQSiKoLBKu8OgfAIAjn0yEQRhJWfhkCBgGremvIv3TffTW7j0kxL7fzdQ/pdlbtJTP7ABdtRAIGRB7jIKAR5dJ7BixDwGKlbdo5qLCe/j2gYPWPuFYgxuX+GLp1NW+LMMp3BixDwFJRTyDAtFrdMX7d3NwHY6L6ODE/j4IEKUIaBMrvGbAMAYOAAp42CWF4YFBPAfgd0QG/ExCYFqRAiAjbgQlw4PdhIZHUg/uQMrAxSTBBej3vGVgYGQIWq60ggGFJAfie1V3RwNh5AcEEs5NG1GoNGJyfMTuPQ4IJzw8IeD1eF+MDGx6jzsK0ZRkCbhdiWkTuziqNcSOkHj6RAI/VBiPqAZgaRT3P5ZfvqD7xyT+vPveXf8VjtXuRIiPvTyPJ05BlCBgADPYQpstofM+qHZmzqxvQFM633i7jn777UJP3vves6sMXfKTifueeex4/8xUgEDFoErH+Hq1cMgScAgCBlq3ArdOC9eIhJlcXIEGYHrNj9MbfX/kXV1cA4vwPfEi3CQY+YaiADAGL4R4M11jt1xZiQSJRhP2s9EmwqNUhdGxZ4f0EliHg0WIMqJYgP3fW9u1vT7o/acMb3vhmRQ2aWARSU54hsAwBS2kB4T+rv2YJOovnYXVPfZzqBw1nIEx5otAyBFw3wGi07lTgm0j10D4HCFR8pC05nc/AMgQMAcLu3eY9kyIdubxaecUhoBoBatrVOAUQWIaAi4Mv/n8vrE444USMR8Ue8wMBtfaSYTCqIEiqceyxx1fz88doirANJEQFjY83CDLLEPB+gjPPPLvVtECBIh+GjOwKkFI0X5l4wyHV29/2ruriiz4u7QbBqdWrXnVQCAPA01pcBB4GQQYZAhZGYvIvNsTH3DEQQOHtrP7vOeMsjN+oLVtel9KRoEagE5A7yjIE3BpkBU7N9YkIkiHAoNHvzf8+Zh8pILFp85ExW5l1kImHirrKEHAdYL8X/d/qM5+5MgUChOjUCcZW91FY0PvQBy/E6FEgePnLXxHzftQ+7LIN2TIEPBewdesJTcbS6UKoMfzH4KltxKOOmpfJY0FA+hD13NqF6P0GhoCVcKWi2dkVmKexcEehDiOycvP9Ea/ZNPHswGuO2JwEAfTGN7RfvbjpdCQXCg2BBDkK2Pb6N1ahkQ4+eH1jyM5tmze9tusUIfUAin7JEEDUESL3LjDqzHjx4NO0qUc0hoCjAKrqYV7Pijuqco82bDi0y2YiHqO2YCetXbuOKCUGNkNNC/h3odNRZhu1IeCW4LvffYa27so8GDzKkIceupH7F4XAueeeH10fIC3ATEMyP/8mxQ5UMQQsDgJlKlDVe0UBGC3CkKQGpA0FIZCeFtAtIKweivmLva4hYJEv06oL5/qPPPLoFENiaMBREgII+ES/XvOFTGx+Q8CpAAbRXL/aa+oGpIhCIWlBSQjwHBQnY4uEGM7mNwSsmiiahTv8WNEJ8bvm6UUhgDZuPDz6NemC9KDar4Lfgr8XQ8AbhVgdwx1+7OSbJE+PiAaCaKNsNMAk4YJ93hgfAPSm4GcIuB7Aqs/Yb60zQFjf1ZBEENFHjWvfQA5F7ncgGliQASJCfmoSvSpOGgIWqxLn9Wlzz6RDPBIQoYefPDHYXUQV/L/0rlNA1AF0ejmwZAhYrEyYXhDIlaszYERvPuvegQgdc8yxURAgdQCA0w79+zzoIxkCHhUOt/liEE0JTqRXv/qIdiMm1R7y1yOIUiiITjHNYvXvfehvCFiExTolCKkzkC08H7fBKP61orsTRCCxh49kD9F1LcYrtm/oZRE4sSBqCPzmxt26aVv11M7dum1b9fTtp1XP3Pmcnr3rtKq6d089e/dp1ZO3DAsCVMqnZUwKhONOBMKwijqmWSBkGnLKBUKt/phtwduPvBfSEN6PUhJkCDQIkz/5ledNfsdzBq/uwdSx4jGDM78KVqyGU12dmTocV6lna3BGCFDUJAKJOuWYcelcqz/GW6CBI7UdEVEItzkdkOpmx6iYHdOyamPgCQQ0eN4h7xzE8E3Hd+c0JDl6oTZhe0pA+5N0p+n/FfMOafVnpcfoMj2tx/bagyGgsD2biBIw/xM3DM308RDYsmVrwRw9fY9CZFEy5qRjWooYqXPlHzOWitrqK3286Q2BbOYnciCKeOL6vW9QKDAG1xko2rbj95khQHShOQWdgdh2zYPULgGGpLXK11LGX8gtxYYAkQRpxN46KEROPu2KPQNBY4qDEVuW08eIWeUj6gKcTBy7sioMXwzGNwSe2ZUr3zcEKPzxOgWLg4h8P+rqR0AIwzXl3txOzs88xZIlS6qjj57fQ+vXr+d3mLZrbQGjAxe1Fssa3xAokO8bArQKec5S48MS04hRkQC1AgxYL7px9aUTTzypuuyyy6svfOGLFd//9Kf/Xv361//VqHvv/Wp11lnnVOvXrAYIMZEF0NCqP8XUwhCIz/d31vN9Q0DbiDOJycCSk4OqC0RFAgjTA4KVK+cwvQwPBDA337fqO9/5bsX9LrzwI0QH/CFXS2b24fNt3UVY/gwBQyC+v28IaO9AybqAwDPVNKQJAhQPSRswL6u5jA0Etm9/a3Xzzbe0mR9YAA0Zmm4LJicK4HvVD/Qz36MFruwbAgr5mQbU/4ghUCBHZ4S4cF2AYiP7IFohQBrA2DSreLCyAwC+tgKAx/y2LrBqRduhoNzWg1XfEIgK+Q2B8gM8oTjZeNLaAxEMwOH9IyYimyAAHNasWRsanZUfADTl/zEpgSIDhfx9OMrMEOg21WcIcB7AtKv1OeYFiB5INfbb73f4A2pSCAHA0FToU17P95300EP/RP0AiACDvmwhNgTI+wEBgz51sV8AODTqRkNgCoU6JhGzbSZitV+6dOkeZudnogkiAInLqun5zzzzHGYCGgt93EaO38H81BIwPgARWAQVCo6Drfx7WCh+mAjQJAsQdRewmlxfOvNwjFdkiy8iupjwsmRAQuaX8TF767ARv6tfpTg0OqYlryec72r+UfDgeedml/cTBIaA9c3LGvcOaKY+e4dAhhwhZv5Hrv418/Nz1GtSADzooIPJ90ODdsn/MT3g4Gt0mnD0po1FQUAtIrYLYQgYAjGrcqFDRtpTAsJ8zP+CF7wg6X1x39nZWQw/KQAwPY9RK3GsSA8UKSgi+N4nj2uJzLoVrWutSNI7fU3aWWgIGAKldvcRWYxsEypsJ21oAABfk2YJgAkFQwwYmJlxX8wMBPKaP+g0HLN+eXXeKaur9etWV9QdDnnZkuR/J6WQ37h0vtpx+vrqfSesrt5x7Fx1yfa11R0XbK4euXprN5AYAtYPrmk+VETiIiKlIRBeAxHjs/prhiAHAAAKpsaUwAAQpJk/XhtesaLis3781pMwLa/NV24bqUev3VrtungTAOH+fOVnbo+cgm2oP+1siDoMAYvjxdpGa1UXKA0BRQOE8gAAQ2cAAIZmE5BuV8iO2bObX6IVCWzr4CUaCM3Mz9eev7HC7OjK96wnUuN309U9v4UFx+cBC6ZoBQtDYDFC4PTT/7huRnrwpTYShbWBqQKAYl1944/C93B8eFIBGcytz1tRAbdhdAz/zuPn+F6w6KXUBVO7XVHF9x4wBAavdQcuC0dp0bQO/IiGABEDPX7AkQKZJgBgcoZ3dDtmrw8F8buw1ZdLAIVwnpUeo2N4BAQUDQxZDzxkCAxeFK4wXfOW29HXIKDaT86uvn2oubkDCenJ79sO+hg7N0BakAAATDduBoDbgAD3JVynLpDd/EQaSisO2G+m1yu9IWAIEPaHEOA4rtaUgN47obpadpi9Pqn3yleu5bY6HPh9sIkoSkAIkMQAANONBQDGJy3A+ICAqEDpwATi9fRcGJ9pQb02n3F//wYMAYtQFWOGh3JyTn/QJdC0HgIM/Bw9368qvyIBrfTsJ0CkCVLwfvj9qO4Azx0CoGkXoMCgSCBIDbqF+jwW46PmWoIhYAgMAAIyZkuBkN+zuo+a0ouGgcaUMTrtSUBQr0fwWoCAr4KBQNQAHWCE4UMA8DUs0LH68zsZX/dHsSG+DhlBgCfisYaAITDQgSHO6b/88h2CAEW6XGPDigCUbvD6/EzoL+Pzldflvq0gAEis6qMAgOFlfAqA/E71gJQQH9VD/FCGgCEwaAg0DQxRE6A2EAzw5NxAhMnr0UCUBALEPgOM2gAAzFqv+MvE+h4IjDwXoD3ETy8QnrJ5hSFgCAxnViAYHKI+oBWb3DvbOYOs+koNUgUIqC9g2Hquz1eEeWvbejFyPWLQffVYQMFjBA2Mm71FaAgYAgsuetIMpjCtVj8um8r9zMwMp+w0Hqe9//6/y2qNYXdD4BAq8ZPOCLDydwZAuCVYANAKjpFlYv2eNKB+Gz9rc0/31T5+05EhYAgspJhOYzgFQweFrDj9+Mc/3cNgc3MHEBGkzPLHzAhEDxCtWrVKAFBor4igMV/XHIDCewFOUJi2gA0plyFgCCxYvj+3//Lsk3A6TIPefGSrkPuxiscMCGF2icdwGycCNZq3zcwAQRuEAAHvVyuzagMlxHsGxIaAIVBcjKVigIwrHs8FADBYWH0nQsDorRHCEa/ZNNL8tAepTWw44MDqo296i8QfBeE7rxO1dRfjK7/XDkGkmkB9fqCEtItw+DIEBgkAhf45hHk0ZKODNDEbYAhNyGszMQgUaOOhUTUAioSY/+sf/1T11O13SfzMKh4VcvO6AgUmVztQ9+E91b+WEO+DVMwQMASGDgDN2DcVvfjdyMep3aZCI6t9KFb7+3dctQcAfn79zdWGl78iNZIRABo3EakQWAgCvBZnABgChkDZQ0Iwmgp5GJdwlA0s2kbb9Y+Z59JKm1s6s+/kIzZVf3PO+4kA+J7bswBAUQqwKZgK8F4GUA8wBIZY7afgVxctKITZ1fbjex1tRXFQR2J3kVpqfAUGbffDaKz+dSkiSRrL1XMlAkBXDW79Pb8rmAr0ZEjIEBicsWVozNv0PQohwOO5z9J99wnDT26ftBqu4RoZDTWaFNOHqkNCRTvN7eeSRoL52mb0+vRgAfF6A0gFDIHiwzoYVqYOzV03dJdWIENAwWN5TcyRpdeNoRW6KyLocF4/z5O1Y6EIhffRVvjj9fQ5FBDA3Nu7AoZAhCl1dJTMrjPjMOY0IonG5+W1c6x+RBIoLLJpHFffI4XzWvERv6+nDDkggOk1BFRPORoigeDqwmUGhIY/JWgIdDVj9KmwBUR0gEGyGE5Gl8FZWTGczM73pAkpF+QIugvRj1O7MnxsuC8g3DdQSBwvPsCCoCGwNxYQk//4MVjd6PVVXIatb7zRKHI4SQggiAiCFb/p5J3Y8FodBJk/JnXReyzWEVDUtNdEAYbA8EeGMcQ4s2PI+n75+Ip+MwiQ9uzTpdDYLl9TQnKlFnosz8f7TqlfCGQlawF0YnoRBRgChgA1CF3+iq+1lT3C7NHSSK7MxuvpdXSVH15fP3PfpnalCo26D+9XRcik96m6A48tnAbw2nzuC/rvbgh4WEgXsGBGQG2xqYfDah1i2PqKzc8hMLhfwzwBj2kLrxVpJE035puajE+ldIkxQ8AQKCa1HJlPx/j1Y625HUNM0/jhWXsYVjl4y2YdrfxJ5sLUCRAIpiOL7RYcwJZhQ2DwhT5dm07i54b8M4RArv3zmuhTSsHPTSYEBFrB+RpGA6mrdMpuSNU6WlOXaRUD+fdYbAAwBMqv9CkrjSCAERkh5mvnnF85fWxxjseojdi28YjnSp9TiK9RNN0umGSOiBgMylIMNAQMAV2qKmKlj4IAuTc9a1IEzNg13O+cVigqCI78Qtye3IVICM0b9w1kThH0vpSCGQKGQPdinkyf8VJVAISVmOfV4NC4VVB5PcCIOIosXsFkoaKBpG29vCfefxoEgp2F+fcHDKAbYAj03fhU81ntp5FK8IEKKrwOIfioVX/qp+5omEjjvhTwYo2dkELw/HrMtIaFgOVQDwwxBIZv/HgBgXphkUEWre4ySe5VP+G6fTr7L/oxkZuANGegEeKpnH8Q0w40BAyB+uWoSxg/FMAJ6wQaGorK9QsIY8dGA7GRioaXptUa1Y5NQ8AQaJdaebou/UJCqP49h1xw5oCM1APpoNLY+wKvGAhMDQBEU/pcLUMgNBymV1W/V21GAUmzBuoULIDqxUGUPMcQ0SWYSpQjAKjGYhkCYdiNAEGvzE8aIvPXf0dEoM08hYXZMT0gklFVMIyGCO89YhNRzoImswAGgCEwmAEj1SDa7qMiYYG0IG7Gn0p7bBtPuwsLQYAioGsAhsBAzR/RrZjfvLFAVyB+IjElly8AAZ6HjVgGgCHQ/ylDhf3lr1GQVTowZOLWY47nIUrxHIAh0GvpKLMw5x8yCLocBabzC3QWgS5QOkEBkFFrRVSWIdBL82P8nIVIOgb84fehdaiC4UiTarRZ+xJyDTsBE/J/FwANgb4KsxKiTuWPlOekAt5cdCvfPaj9LNNrVyKmz7obUCcXK6WyDIHe5v2EqCVSDPXtF3KWQCs9X+MPJU2TtjxT/PPqbwj0PvQvWaHWxUzCLcCFpKsdTfs8QDYwJe8CtAyBokZkqGchVygiDw4kCaf8hixSiTVr1lYvfelK/t9sZEOgt6s/K1TvZhAoHoanCw1BOgId85988inVVZ/9HJdEdwfAEOhv7s/XvgIK4xChaNKvz0DQlZNWrVpVvenNb6kw/19/6drq05ddwUYqDwEZAlZOIET15wtI3QTe0yGHHladffa5GH8PHX/8Fg8CGQJWZiCofUmbMXNFP/6EYXUTPvvZa7TqN+rFy5bp0FbLELCmldYQJQAFim/1Kwph2ElDfEaDNSXI7IB2Fmpg6Ec/+pdWABAZuCBoCFjlI4X65drpy9OCxMQSkGi9NBkKL2E26jJqDzzwD60QOPK1R3koyBCwetoSDQUoOkUL3/72dxoBQIowMzPjk4EMAWsgImrolD7cedc9jRA4/V3v9gGhhoA1JFFX6LKX4brrbmiEAN0CTwgaAtbArrKccoES9Mtf/qotFeAPzKmAIWANTMnnC7R1BkgFKEj6MzUErIEpqjgY0RkgFfCYsCFgDU/MGjAFOFFnQKmAx4QNAWt40iXWJ+kMkAow3uzP0xCwBnqaEsNBE3UG3BUwBKzF0SGgM1CwK2A9e9dp1f0PGgJWjzoEdAY8IJRXz9y5W7tOq566bVv15C3bqt/ctK164vpt1X9f95zu+74hYBUQOxNjIPDggw817RVwKpBsdAweJ0PAKiH6+1EQ+Pvvfj+EQG2vgEP39hU9VYaAVX4PAVuIkzsDbBteTKnAs3c/t6o/fftus+983ug3RBvaEBi+3Ca86eadYSoAQPauz+Oe541+B6s6Rt+tGyMMawgMXN5IxIEk4yDQeIIQ3YW9PU8vL0OgvHzWwNhZgZ/85N/2AMBH/+xjnCDU/zz9zix5uiFgCBgCDz/8SB0CHC3OyHGvjD7FPN0QMAQMgbAzwMVFmDa00ZEhYC2CgaGvf+NbmF/XFeCPKXOO3mejGwKGgCMB2oNdNwwFVfch5uiGgCFgCEScHRCE7UF7zTIEBiwPC4Ubh0gFHvnc1uqRq7dWt31wc7XzvM3VY58/2aY1BIYqa/7Va6M3DjEluGRmn2p+zXJGhrnwKOK26r5Lj7NxDQGr7yOvGpBR8e3WD2xmK3H0xiGuM4j5qQuEuwkNAkPAWuBeuQyufLyt8Ebo/tUL5lF10mErOF4stj3IqHDrdQiZHVi/cqnNawhY0zM3VfXJCm4XnbquWrVylhUdQ6s1GNMZiBKpAa9hAy8iCPAHyR8nf6j80dq8cf1wJGMrNJ9mb5zVn1Wa1bq2ckftGbjttl3RENAMwcM7XmcTLxYINLxx/pCfg8NOAYI/evLSvdPMWqnD1bovLTIBIMzjDztso4we0R6MF3ChcGgTL0oIxAtzyChPfgXz7Cn2bGOwaYnnD18zWJUDIw9W5P2NhbyYA0Yfe+znyRDQhUmpOdjIhoC1wDpny2py/8bcXZcej2gPJgvIuEhoCFgLrC+ecThm38Oc2ga8fftbE684lC7OG+A9+N/CECgvi349O/0a23lEBrQF088VTI8G5pbN8H4sQ6C0DIDZZUtY8Rur9zFtwfT2oKMBQ8BCvekEAIC2yn3Xy44NIBowBAwBS63Atqr9mjVrZfA87UFHA4bAr256e08+MOttR82x0o9clTUclH7ZMUcDLTIEHvrWNT34sCxGddUKbNOqVatCo6e3B4tGA9Zdj/5j/yFw3eP/0YNowK1AOgGB8eKHgyIOF33Tm99SOBqwWGDxWO8hgG7+2c/6FRG4FRg/HBS/exAjF4gGrF/ceqbSgCFAoLwsyzIELMsyBCzL2nT3D8tB4A++8c/+0C2rR7r68afxZjkIoE/863/6w7esfojovDgECD0MAsvqgc794S/wZHkISH/07UehUHlZlqU6QAEIDFuWZRkClmUZAvGyLEPg/2z7mD80y9qLtP9VX0uDAHrpF/7OH55l7SX6/+d/OR0CM+/Y4Q/PsvaSKOB/bfmTdAgIBMONCCzLmr3iHgEgHQJBoXBgsizrf590kTw8FgLv5AfLshafBIED/GFY1qLULhAQpgSWZS0OPb5bhwgBAsGV/mAsa+/WC0/4cDXzhxc8KgCE/yk1OI/IwLKsvUcv2nbJJVt27LrkQ996mBrgUln+fwBTMh8GPoJupQAAAABJRU5ErkJggg==";
    },

    init: function() {
        var self = this;

        var barBgColor = cc.color(0, 64, 112, 255);
        var barForeColor = cc.color(33, 164, 204, 255);

        var bgLayer = self._bgLayer = new cc.LayerColor(cc.color(255, 255, 255, 255));
        self.addChild(bgLayer, 0);

        var logoWidth = 180;
        var logoHeight = 180;
        var fontSize = 25;

        if (cc._loaderImage) {
            cc.loader.loadImg(
                cc._loaderImage, {
                    isCrossOrigin: false
                },
                function(err, img) {
                    logoWidth = img.width;
                    logoHeight = img.height;
                    self._initStage(img, cc.visibleRect.center);
                }
            );
        }

        var label = self._label = new cc.LabelTTF("LOADING", "Arial", fontSize);
        label.setPosition(cc.pAdd(cc.visibleRect.center, cc.p(0, -logoHeight)));
        label.setColor(cc.color(255, 255, 255));
        label.enableShadow(0, -1, 255, 2);
        self.addChild(this._label, 10);

        this._layerBgBar = new cc.LayerColor(barBgColor, 500, 40);
        this._layerBgBar.setPosition(cc.pAdd(cc.visibleRect.center, cc.p(0, -logoHeight)));
        this._layerBgBar.setAnchorPoint(0.5, 0.5);
        this._layerBgBar.ignoreAnchorPointForPosition(false);
        self.addChild(this._layerBgBar, 0);

        this._layerBar = new cc.LayerColor(barForeColor, 500, 40);
        this._layerBar.setPosition(0, 0);
        this._layerBar.setAnchorPoint(0.0, 0.5);
        this._layerBgBar.addChild(this._layerBar, 0);

        this._layerBar.setScaleX(0.0);

        return true;
    },

    _initStage: function(img, centerPos) {
        var self = this;
        var texture2d = self._texture2d = new cc.Texture2D();
        texture2d.initWithElement(img);
        texture2d.handleLoadedTexture();
        var logo = self._logo = new cc.Sprite(texture2d);
        logo.setScale(cc.contentScaleFactor());
        logo.x = centerPos.x;
        logo.y = centerPos.y;
        self._bgLayer.addChild(logo, 10);
    },

    onEnter: function() {
        var self = this;
        cc.Node.prototype.onEnter.call(self);
        self.schedule(self._startLoading, 0.3);
    },

    onExit: function() {
        cc.Node.prototype.onExit.call(this);
        var tmpStr = "LOADING";
        this._label.setString(tmpStr);
    },

    initWithResources: function(resources, cb) {
        if (cc.isString(resources))
            resources = [resources];
        this.resources = resources || [];
        this.cb = cb;
    },

    _startLoading: function() {
        var self = this;
        self.unschedule(self._startLoading);
        var res = self.resources;
        cc.loader.load(res,
            function(result, count, loadedCount) {

                self._layerBar.setScaleX(Math.min(loadedCount / count, 1));

                var percent = (loadedCount / count * 100) | 0;
                percent = Math.min(percent, 100);
                //self._label.setString("Loading... " + percent + "%");
            },
            function() {
                if (self.cb)
                    self.cb();
            });
    }
});

Preloader.preload = function(resources, cb) {
    var _cc = cc;
    if (!_cc.loaderScene) {
        _cc.loaderScene = new Preloader();
        _cc.loaderScene.init();
    }
    _cc.loaderScene.initWithResources(resources, cb);

    // cc.spriteFrameCache.addSpriteFrames("res/masks.plist");
    // cc.spriteFrameCache.addSpriteFrames("res/character_0.plist");
    // cc.spriteFrameCache.addSpriteFrames("res/character_1.plist");
    // cc.spriteFrameCache.addSpriteFrames("res/character_2.plist");
    cc.spriteFrameCache.addSpriteFrames("res/ui.plist");

    cc.director.runScene(_cc.loaderScene);
    return _cc.loaderScene;
};