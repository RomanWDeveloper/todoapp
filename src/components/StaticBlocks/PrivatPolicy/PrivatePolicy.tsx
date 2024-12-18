import { FC } from "react"
import { Flex } from "./style"

export const PrivatePolicy: FC = () => {
  return (
    <Flex vertical={true} className="private-policy">
      <h1>Политика конфиденциальности</h1>
      <p>
        Благодарим вас за интерес к нашему приложению TaskCircle. В этом документе мы описываем, как мы будем использовать ваши персональные данные.
      </p>

      <h2>Информация, которую мы собираем</h2>
      <p>
        Во время регистрации или входа в приложение TaskCircle, мы будем собирать следующие данные:
      </p>
      <ul>
        <li>E-mail</li>
      </ul>

      <p>
        Мы также будем собирать информацию о ваших задачах, такие как:
      </p>
      <ul>
        <li>Название задачи</li>
        <li>Описание задачи</li>
        <li>Присвоенные лица</li>
        <li>Срок выполнения</li>
        <li>Статус задачи (например, выполнено, в процессе, не выполнено)</li>
      </ul>

      <h2>Цели использования данных</h2>
      <p>
        Мы используем ваши данные для следующих целей:
      </p>
      <ul>
        <li>Предоставление вам доступа к нашему приложению</li>
        <li>Обеспечение безопасности и целостности нашего приложения</li>
        <li>Предоставление вам персонализированных рекомендаций и предложений</li>
      </ul>

      <h2>Хранение и защита данных</h2>
      <p>
        Мы храним ваши данные на наших серверах, расположенных в [стране/регионе]. Мы принимаем все необходимые меры для защиты ваших данных от несанкционированного доступа, изменения, разрушения или уничтожения.
      </p>

      <h2>Ваши права</h2>
      <p>
        Вы имеете право на доступ к своим данным, а также на их исправление или удаление. Вы можете обратиться к нам с запросом доступа к своим данным или их исправления/удаления.
      </p>

      

      <h2>Изменения политики конфиденциальности</h2>
      <p>
        Мы можем изменять нашу политику конфиденциальности время от времени. Мы будем уведомлять вас о любых изменениях в нашей политике конфиденциальности.
      </p>
    </Flex>
  )
}