import React, { useEffect } from 'react'
import { Text } from '../Components/Text'
import { Container, View } from '../Components/Container'
import { Image } from '../Components/Image'
import { Button } from '../Components/Button'
import { useTheme } from '../Hooks'

const TermsOfUse = ({navigation}) => {
  useEffect(() => {
  })

  return (
    <View centerX scroll>

      <Container centerX>
        <Text  large bold
                marginTop={useTheme().Margin.top-21}>Terms Of Use</Text>
      </Container>

      <Container centerX>
        <Container width={'90%'}>
            <Text   marginTop={useTheme().Margin.top-15}
                    marginBottom={useTheme().Margin.top-15}
                    Bodytext
                    fontSize={useTheme().FontSize.termsOfUse}
                    justify={true}>
            1. Do objeto{'\n\n'}

            A plataforma visa oferecer aos seus usuários, artigos confiáveis e informativos acerca das disciplinas presentes na Base Nacional Comum Curricular (BNCC).
            {"\n"}
            A plataforma caracteriza-se pela prestação do seguinte serviço: apresentação de artigos acadêmicos.
            {"\n\n"}

            2. Da aceitação{'\n\n'}

            O presente Termo estabelece obrigações contratadas de livre e espontânea vontade, por tempo indeterminado, entre a plataforma e as pessoas físicas, usuárias do aplicativo.
            {"\n"}
            Ao utilizar a plataforma o usuário aceita integralmente as presentes normas e compromete-se a observá-las, sob o risco de aplicação das penalidades cabíveis.
            {"\n"}
            A aceitação do presente instrumento é imprescindível para o acesso e para a utilização de quaisquer serviços fornecidos pelo aplicativo. Caso não concorde com as disposições deste instrumento, o usuário não deve utilizá-los.
            {'\n\n'}

            3. Do acesso dos usuários{'\n\n'}

            Serão utilizadas todas as soluções técnicas à disposição do responsável pela plataforma para permitir o acesso ao serviço 24 (vinte e quatro) horas por dia, 7 (sete) dias por semana. No entanto, a navegação na plataforma ou em alguma de suas páginas poderá ser interrompida, limitada ou suspensa para atualizações, modificações ou qualquer ação necessária ao seu bom funcionamento.
            {"\n\n"}

            4. Do cadastro{'\n\n'}

            O acesso às funcionalidades da plataforma exigirá a realização de um cadastro prévio. Ao se cadastrar o usuário deverá informar dados completos, recentes e válidos, sendo de sua exclusiva responsabilidade manter referidos dados atualizados, bem como o usuário se compromete com a veracidade dos dados fornecidos.
            {'\n\n'}
            O usuário se compromete a não informar seus dados cadastrais e/ou de acesso à plataforma a terceiros, responsabilizando-se integralmente pelo uso que deles seja feito.
            {'\n\n'}
            Menores de 18 anos e aqueles que não possuírem plena capacidade civil deverão obter previamente o consentimento expresso de seus responsáveis legais para utilização da plataforma e dos serviços ou produtos, sendo de responsabilidade exclusiva dos mesmos o eventual acesso por menores de idade e por aqueles que não possuem plena capacidade civil sem a prévia autorização.
            {'\n\n'}
            Mediante a realização do cadastro o usuário declara e garante expressamente ser plenamente capaz, podendo exercer e usufruir livremente dos serviços.
            {'\n\n'}
            O usuário deverá fornecer um endereço de e-mail válido, através do qual o aplicativo realizará todas as comunicações necessárias.
            {'\n\n'}
            Após a confirmação do cadastro, o usuário possuirá um login e uma senha pessoal, a qual assegura ao usuário o acesso individual à mesma. Desta forma, compete ao usuário exclusivamente a manutenção da referida senha de maneira confidencial e segura, evitando o acesso indevido às suas informações pessoais.
            {'\n\n'}
            Toda e qualquer atividade realizada com o uso da senha será de responsabilidade do usuário, que deverá informar prontamente a plataforma em caso de uso indevido da respectiva senha.
            {'\n\n'}
            Não será permitido ceder, vender, alugar ou transferir, de qualquer forma, a conta, que é pessoal e intransferível.
            {'\n\n'}
            Caberá ao usuário assegurar que o seu equipamento seja compatível com as características técnicas que viabilizem a utilização da plataforma e dos serviços.
            {'\n\n'}
            O usuário poderá, a qualquer tempo, requerer o cancelamento de seu cadastro junto ao aplicativo. O seu descadastramento será realizado o mais rapidamente possível. Caso o usuário do tipo aluno delete sua conta, os comentários feitos pelo mesmo na plataforma continuarão a existir, no entanto, se um usuário do tipo professor exclua sua conta, todas as publicações de sua autoria serão deletadas concomitantemente.
            {'\n\n'}
            O usuário, ao aceitar os Termos e Política de Privacidade, autoriza expressamente a plataforma a coletar, usar, armazenar, tratar, ceder ou utilizar as informações derivadas do uso dos serviços, do aplicativo e quaisquer plataformas, incluindo todas as informações preenchidas pelo usuário no momento em que realizar ou atualizar seu cadastro, além de outras expressamente descritas na Política de Privacidade que deverá ser autorizada pelo usuário.
            {'\n\n'}

            5. Do suporte{'\n\n'}

            Em caso de qualquer dúvida, sugestão ou problema com a utilização do aplicativo, o usuário poderá entrar em contato com o suporte, através do canal: thoth.ifjf@gmail.com.
            {'\n'}
            Todas as mensagens enviadas ao suporte serão respondidas em um prazo de até 7 (sete) dias úteis.
            {'\n\n'}

            6. Das responsabilidades{'\n\n'}

            É de responsabilidade do usuário:
            {'\n\n'}
            a) a correta utilização da plataforma, dos serviços, prezando pela boa convivência, pelo respeito e cordialidade entre os usuários;
            {'\n\n'}
            b) pelo cumprimento e respeito ao conjunto de regras disposto nesse Termo de Condições Geral de Uso, na respectiva Política de Privacidade e na legislação nacional e internacional;
            {'\n\n'}
            c) pela proteção aos dados de acesso à sua conta/perfil (login e senha).
            {'\n\n'}
            d) a não cópia dos conteúdos apresentados nas publicações.
            {'\n\n'}
            e) deixar explícito as referências bibliográficas usadas para a elaboração das publicações, caso algum conteúdo de terceiros tenha sido usado. (válido somente para professores).
            {'\n\n'}
            f) garantir que os conteúdos apresentados na plataforma sejam condizentes com a Base Nacional Comum Curricular vigente para publicação. (válido somente para professores)
            {'\n\n'}
            É de responsabilidade da plataforma Thoth:
            {'\n\n'}
            a) resolver os defeitos e erros que o aplicativo vier a apresentar em suas funcionalidades, dentro de um prazo de tempo a ser estipulado de acordo com os problemas que deverão ser enfrentados.
            {'\n\n'}
            b) as informações que foram por ela divulgadas, sendo que os comentários ou informações divulgadas por usuários são de inteira responsabilidade dos próprios usuários.
            {'\n\n'}
            A plataforma não se responsabiliza por links externos contidos em seu sistema que possam redirecionar o usuário ao ambiente externo a sua rede.
            {'\n\n'}
            Não poderão ser incluídos links externos ou páginas que sirvam para fins comerciais ou publicitários ou quaisquer informações ilícitas, violentas, polêmicas, pornográficas, xenofóbicas, discriminatórias ou ofensivas. 
            {'\n\n'}

            7. Dos direitos autorais{'\n\n'}

            O presente Termo de Uso concede aos usuários uma licença não exclusiva, não transferível e não sublicenciável, para acessar e fazer uso da plataforma e dos serviços por ela disponibilizados.
            {'\n\n'}
            A estrutura do aplicativo, as marcas, logotipos, nomes comerciais, layouts, gráficos e design de interface, imagens, ilustrações, fotografias, apresentações, vídeos, conteúdos escritos e de som e áudio, programas de computador, banco de dados, arquivos de transmissão e quaisquer outras informações e direitos de propriedade intelectual da plataforma Thoth, observados os termos da Lei da Propriedade Industrial (Lei nº 9.279/96), Lei de Direitos Autorais (Lei nº 9.610/98) e Lei do Software (Lei nº 9.609/98), estão devidamente reservados.
            {'\n\n'}
            Este Termos de Uso garante ao usuário total direito sobre as publicações realizadas pelo mesmo dentro da plataforma.
            {'\n\n'}
            O uso da plataforma pelo usuário é pessoal, individual e intransferível, sendo vedado qualquer uso não autorizado, comercial ou não-comercial. Tais usos consistirão em violação dos direitos de propriedade intelectual da plataforma Thoth puníveis nos termos da legislação aplicável.
            {'\n\n'}

            8. Das sanções{'\n\n'}

            Sem prejuízo das demais medidas legais cabíveis, a plataforma Thoth poderá, a qualquer momento, advertir, suspender ou cancelar a conta do usuário:
            {'\n\n'}
            a) que violar qualquer dispositivo do presente Termo;
            {'\n\n'}
            b) que descumprir os seus deveres de usuário;
            {'\n\n'}
            c) que tenha qualquer comportamento fraudulento, doloso ou que ofenda a terceiros. 
            {'\n\n'}

            9. Da rescisão{'\n\n'}

            A não observância das obrigações pactuadas neste Termo de Uso ou da legislação aplicável poderá, sem prévio aviso, ensejar a imediata rescisão unilateral por parte da plataforma Thoth o bloqueio de todos os serviços prestados ao usuário.
            {'\n\n'}

            10. Das alterações
            {'\n\n'}
            Os itens descritos no presente instrumento poderão sofrer alterações, unilateralmente e a qualquer tempo, por parte da plataforma Thoth para adequar ou modificar os serviços, bem como para atender novas exigências legais. As alterações serão veiculadas pelo aplicativo Thoth e o usuário poderá optar por aceitar o novo conteúdo ou cessar o uso dos serviços.
            {'\n\n'}
            Os serviços oferecidos podem, a qualquer tempo e unilateralmente, e sem qualquer aviso prévio, ser cessados e/ou alterados em suas características, bem como restringido para o uso ou acesso.
            {'\n\n'}

            11. Da política de privacidade
            {'\n\n'}
            Além do presente Termo, o usuário deverá consentir com as disposições contidas na respectiva Política de Privacidade a ser apresentada a todos os interessados dentro da interface da plataforma.
            {'\n\n'}

            12. Da monetização
            {'\n\n'}
            A receita gerada pelo aplicativo advém exclusivamente de anúncios visualizados dentro deste.
            {'\n\n'}
            O aplicativo Thoth retém para si 35% da renda gerada pelos anúncios para a própria manutenção do aplicativo, enquanto 65% é destinado aos professores.
            {'\n\n'}
            Os anúncios são exibidos ao usuário quando este acessa um Tot produzido por um professor.
            {'\n\n'}
            A possibilidade de transferência é desbloqueada se e somente se quando o professor atingir o saldo mínimo de R$100,00 dentro da plataforma.
            {'\n\n'}
            A transferência do dinheiro do aplicativo para a conta bancária do professor parceiro ocorrerá via PIX em um prazo de até 7 dias úteis a partir da data da ordem de transferência. 
            </Text>
        </Container>
            <Button onPress={()=>navigation.goBack()}>Go Back</Button>
      </Container>

    </View>
  )
}

export default TermsOfUse
